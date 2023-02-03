"use strict";
const express = require('express');
const router = express.Router();
const getUsersList = require('./service/helper');
router.route('/').get(getUsersList);
module.exports = router;
