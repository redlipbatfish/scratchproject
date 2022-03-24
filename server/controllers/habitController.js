const habitController = {};
const db = require('../models/dbModels');


// Assign a habit to feed choose from initial habits (Post)
habitController.assignHabit = (req, res, next) => {
    // expecting in post body
        // habit name
        // if type is number, a goal
        // user_id

        // convert habit name into habit id before passing into body by traversing the habits list and grabbing the habit id

    // update user habits table with passed in info

    // const { userId, habitName, targetNum } = req.body;
    // const queryString= 'INSERT INTO user_habits(user_id, habit_id, target_num, active) VALUES ($1, $2, $3, $4)'
    // const info = [userId, habitName, targetNum, true]
    // db.query(queryString, info)

    // next();
    
    // using habits name reference the habits table and grab that id
    // insert row into user-habits with habit_id and target, set active to true
};

// Update a habit (change a goal/ target)
habitController.updateHabit = (req, res, next) => {
    
    
    // select the habit from the user
    // change the targetnum to newtarget
    console.log(req.body)
    const data = [req.body.newTarget, req.body.userId, req.body.habitId];
    console.log(data)
    const queryString = 'UPDATE user_habits SET target_num = $1 WHERE user_id=$2 AND habit_id =$3;';
    db.query(queryString,data)
    next();
};

// Remove a habit (delete)
habitController.removeHabit = (req, res, next) => {
    // update record from user-habits, change habit active property to false
    const data = [req.body.userId, req.body.habitId];
    const queryString = `UPDATE user_habits SET active = false WHERE user_id=$1 AND habit_id=$2;`;

    db.query(queryString, data);
    next();
};

// update how much have finsihed today
habitController.updateFinished = (req, res, next) => {};

module.exports = habitController;
