'use strict';
var express = require('express');
var router = express.Router();
var department=require('../controllers/department');
var privilege=require('../controllers/privilege');
var config=require('../controllers/config');

// 得到所有角色信息
router.get('/',department.showMenu);
//创建角色
router.post('/add',department.createDepartment);
//修改角色信息
router.post('/modify',department.mofifyDepartment);
//得到所有权限信息
router.get('/privilege',privilege.showPrivilege);

//测试
router.post('/config',config.configDepartment)
module.exports=router;