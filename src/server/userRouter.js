const db = require('../db/db.js');
const express = require('express');
const router = express.Router();

router.get('/createusers',db.verifyUser, (req, res) => {
  // req.user is the parsed jwt containing user information
  console.log('user info', req.body);
  res.status(200).json(req.body ? req.body : null);
});

router.post('/createusers', db.createUser, (req, res) => {
    // res.status(200).redirect('/'); //THIS IS THE PROFILE PAGE?? "/"
    console.log('reqbody', req.body);
    res.status(200).json(res.locals.newUser);
  }); //when you land at '/



module.exports = router;