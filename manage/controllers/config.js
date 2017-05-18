'use strict';

const express = require('express');
const router = express.Router();
const request = require('../utils/resquest');
const response = require('../utils/response');
const configService = require('../services/config');

/**
 * config department according to the params.
 * @method post localhost/3000/modify
 * @param:
 *   deparmentID: departmentID,
 *   pageID:[], (use 'like' query)
 * @return modify department.
 */
exports.configDepartment=function (req,res,next) {
    const params = req.body;
    console.log(params)
    configService.configDepartment(req.body)
        .then(config => response.success(config, res))
        .catch(err => response.error(err, req, res));
}