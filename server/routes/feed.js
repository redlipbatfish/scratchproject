const express = require('express');
const dbController = require('../controllers/dbController');
const userController = require('../controllers/userController');
const cors = require('cors');

const router = express.Router();

// get feed ROUTE HANDLER
router.post(
  '/',
  userController.getUserInfo,
  dbController.getUserInfo,
  (req, res) => {
    return res.status(200).json({
      calendar: res.locals.calendarRecord,
      activeHabits: res.locals.activeHabits,
    });
  }
);

module.exports = router;
