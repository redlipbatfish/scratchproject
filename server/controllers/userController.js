const userController = {};

// Rextract and save new user's account info from frontend into res.locals
userController.addUser = (req, res, next) => {
  const userProps = ['firstName', 'lastName', 'username', 'email', 'password'];
  res.locals.newUser = {};

  for (const prop of userProps) {
    if (!req.body[prop]) {
      return next({
        log: 'UserController.addUser ERROR: Properties on request body undefined',
        message: {
          err: 'UserController.addUser ERROR: Incorrect data received',
        },
      });
    }
    res.locals.newUser[prop] = req.body[prop];
  }
  return next();
};

// Extract user email/pw from frontend, and store into res.locals
userController.checkUser = (req, res, next) => {
  const userProps = ['email', 'password'];
  res.locals.loginUser = {};

  for (const prop of userProps) {
    if (!req.body[prop]) {
      
      return next({
        log: 'UserController.checkUser ERROR: Properties on request body undefined',
        status: 422,
        message: {
          err: 'UserController.checkUser ERROR: Incorrect data received',
        },
      });
    }
    res.locals.loginUser[prop] = req.body[prop];
  }
  return next();
};

// Get user email from feed request
userController.getUserInfo = (req, res, next) => {
  const userId = req.body.userId;
  if (!userId)
    return next({
      log: 'UserController.getUserInfo ERROR: No user id given',
      message: {
        err: 'UserController.getUserInfo ERROR: No user id given',
      },
    });
  res.locals.userId = userId;
  return next();
};

userController.assignHabit = (req, res, next) => {
 
  const { userId, habitName, targetNum } = req.body;

  const habitPairs = {
    'Drink water': 1,
    'Make bed': 2,
    'Walk dog': 3,
    'Sleep on time': 4,
    'Stretch': 5,
  };
  //console.log('user id - ', targetNum)
  let type;
  if(targetNum === null){
      const habitInfo = {
      habit: habitName,
      habitId: habitPairs[habitName],
      type: 'boolean',
      status: null,
      goal: null,
      completed: false
      
    }
    res.locals.habitData = habitInfo;
  } else{
    const habitInfo = {
    habit: habitName,
    habitId: habitPairs[habitName],
    type: 'number',
    status: 0,
    goal: targetNum,
    completed: false
  
  }
  res.locals.habitData = habitInfo;
  }
  


  
  res.locals.userId = userId;
  res.locals.habitId = habitPairs[habitName];
  res.locals.targetNum = targetNum;
 
  return next();
};

userController.updateRecord = (req, res, next) => {
  const { userId, habitName, newNum } = req.body;
  const habitPairs = {
    Water: 1,
    'Make Bed': 2,
    'Walk Dog': 3,
    'Sleep on Time': 4,
    Stretch: 5,
  };
  res.locals.userId = userId;
  res.locals.habitId = habitPairs[habitName];
  res.locals.newNum = newNum;
  return next();
};

module.exports = userController;
