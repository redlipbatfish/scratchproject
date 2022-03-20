const express = require('express');
const dbController = require('../controllers/dbController');
const habitController = require('../controllers/habitController');
const userController = require('../controllers/userController');

const router = express.Router();

// user login ROUTE HANDLER
router.get(
  '/',
  userController.checkUser,
  dbController.checkUser,
  (req, res) => {
    return res.status(200).json('Welcome!');
  }
);

module.exports = router;
