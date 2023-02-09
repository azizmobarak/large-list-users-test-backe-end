const express = require('express');
const router = express.Router();
const getUsersList = require('./service/usersListByPage');


router.route('/').get(getUsersList);

module.exports = router;