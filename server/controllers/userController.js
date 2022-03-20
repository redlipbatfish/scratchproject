const userController = {};

// Extract data from sign up -> save into obj
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

// Extract data from login -> save into obj
userController.checkUser = (req, res, next) => {
  const userProps = ['email', 'password'];
  res.locals.loginUser = {};

  for (const prop of userProps) {
    if (!req.body[prop]) {
      return next({
        log: 'UserController.checkUser ERROR: Properties on request body undefined',
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
  const userEmail = req.body.email;
  if (!userEmail)
    return next({
      log: 'UserController.getUserInfo ERROR: No user email given',
      message: {
        err: 'UserController.getUserInfo ERROR: No user email given',
      },
    });
  res.locals.userEmail = userEmail;
  return next();
};

// bigcat drinkwater have_finsihed 0->1

// userController: get username, habit, number to change from request and store them into res.locals => ({username: bigcat, habit: drinkwater, prev: 0, after:1})

// dbController: update fullfilled% and daily total%
userController.updateRecord = () => {};

module.exports = userController;
