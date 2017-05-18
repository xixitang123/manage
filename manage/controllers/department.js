/**
 * Created by Administrator on 2017/5/9.
 */


/* GET Menu page. */
'use strict';

const express = require('express');
const router = express.Router();
const request = require('../utils/resquest');
const response = require('../utils/response');
const departmentService = require('../services/department');


/**
 * Get all department
 *
 * @method GET localhost/3000/privilege
 * @param query:
 *   departmentID: departmentID ,
 *   name: name,
 *   remark: remark, (use 'like' query)
 * @return privilege records.
 */

exports.showMenu=function (req,res,next) {
    const page = request.getPage(req.query);
    departmentService.findDepartment(req.query, page)
        .then(department => response.success(department, res))
        .catch(err => response.error(err, req, res));
}


/**
 * create department according to the params.
 * @method post localhost/3000/add
 * @param:
 *   name: name,
 *   remark: remark, (use 'like' query)
 * @return created department.
 */

exports.createDepartment=function (req,res,next) {
    const params = req.body;
    departmentService.createDepartment(req.body)
        .then(department => response.success(department, res))
        .catch(err => response.error(err, req, res));
}

/**
 * modify department according to the params.
 * @method post localhost/3000/modify
 * @param:
 *   name: name,
 *   remark: remark, (use 'like' query)
 * @return modify department.
 */
exports.mofifyDepartment=function (req,res,next) {
    const params = req.body;
    console.log(params)
    departmentService.modifyDepartment(req.body)
        .then(department => response.success(department, res))
        .catch(err => response.error(err, req, res));
}


