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
    SELECT password FROM users
    WHERE email = $1 AND password = $2
    `;
    const checkUser = await db.query(checkUserQuery, params);
    if (checkUser.rows.length) return next();
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
  const email = res.locals.userEmail;
  const idQuery = `SELECT id FROM users WHERE email= $1;`;
  const userId = await db.query(idQuery, [email]).rows[0];

  // const todayRecordQuery = `
  //       SELECT habit_id, fullfilled_percent FROM user_habit_records
  //       WHERE user_id=$1 AND date=(SELECT CURRENT_DATE);
  //       `;
  // const habitRecord = await db.query(todayRecordQuery, [userId]);
};

// update today's record
dbController.updateRecord = () => {};

module.exports = dbController;
