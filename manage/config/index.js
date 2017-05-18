/**
 * Created by Administrator on 2017/5/9.
 */
'use strict';

const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, env));

module.exports = config;