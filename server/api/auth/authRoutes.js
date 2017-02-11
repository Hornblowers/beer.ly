'use strict';

const router = require('express').Router();
const auth = require('./authController');

const utils = require('../utils/helpers');
const config = require('../../config/apiKeys.js');

router.route('/auth')
  .get(auth.redirectToAuth);

router.route('/callback')
  .get(auth.getToken);

router.route('/user/info')
  .get(auth.getUserInfo);

module.exports = router;

