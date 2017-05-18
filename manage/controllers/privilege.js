/**
 * Created by Administrator on 2017/5/9.
 */
'use strict';

const express = require('express');
const router = express.Router();
const request = require('../utils/resquest');
const response = require('../utils/response');
const privilegeService = require('../services/privilege');


/**
 * Get all privilege
 *
 * @method GET localhost/3000/privilege
 * @param query:
 *   departmentID: departmentID ,
 *   name: name,
 *   remark: remark, (use 'like' query)
 * @return repair records.
 */
exports.showPrivilege=function (req,res,next) {
    const page = request.getPage(req.query);
    privilegeService.findPrivilege(req.query, page)
        .then(privilege => response.success(privilege, res))
        .catch(err => response.error(err, req, res));

}