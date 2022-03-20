const dbController = {};
const db = require('../models/dbModels');

// Create User (post)
dbController.saveUser = async (req, res, next) => {
  const { firstName, lastName, username, email, password } = res.locals.newUser;
  params = [firstName, lastName, username, email, password];
  try {
    const saveUserQuery = `
        INSERT INTO users (first_name, last_name, user_name, email, password)
        VALUES($1, $2, $3, $4, $5)
        RETURNING *
        `;
    const newUser = await db.query(saveUserQuery, params);
    res.locals.userId = newUser.rows[0].id;
    return next();
  } catch (error) {
    return next({
      log: 'Express error in saveUser middleware',
      status: 400,
      message: {
        err: `dbController.saveUser: ERROR: ${error}`,
      },
    });
  }
};

// Check user's info in request matches db (get)
dbController.checkUser = async (req, res, next) => {
  // res.locals.loginUser
  const { email, password } = res.locals.loginUser;
  params = [email, password];
  try {
    const checkUserQuery = `
    SELECT id AS userId FROM users
    WHERE email = $1 AND password = $2
    `;
    const result = await db.query(checkUserQuery, params);
    if (result.rows.length) {
      res.locals.userId = result.rows[0];
      return next();
    }
    return next({
      log: 'No such user or pw dont match',
      status: 400,
      message: {
        err: `dbController.checkUser: no such user or pw dont match`,
      },
    });
  } catch (error) {
    return next({
      log: 'Express error in checkUser middleware',
      status: 400,
      message: {
        err: `dbController.checkUser: ERROR: ${error}`,
      },
    });
  }
};

// return past history and today's record
dbController.getUserInfo = async (req, res, next) => {
  const userId = res.locals.userId;
  const calendarQuery = `
        SELECT total_percent FROM daily_count
        WHERE user_id=$1 AND date BETWEEN '2022-03-01' AND (SELECT CURRENT_DATE)
        ORDER BY date;
        `;
  const habitRecord = await db.query(calendarQuery, [userId]);
  res.locals.calendarReocrd = [];
  for (let row of habitRecord.rows) {
    res.locals.calendarReocrd.push(Number(row.total_percent));
  }
  return next();
  // const todayRecordQuery = `
  //       SELECT habit_id, fullfilled_percent FROM user_habit_records
  //       WHERE user_id=$1 AND date=(SELECT CURRENT_DATE);
  //       `;
  // const habitRecord = await db.query(todayRecordQuery, [userId]);
};

// update today's record
dbController.updateRecord = () => {};

module.exports = dbController;
