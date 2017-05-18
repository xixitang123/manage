/**
 * Created by Administrator on 2017/5/9.
 */
'use strict';

const menuModel = require('../models').department;

module.exports = {

    findDepartment: (params, page) => {
        const where = {};
        if (params.departmentID !== undefined) {
            where.departmentID = params.departmentID;
        }
        if (params.name !== undefined) {
            where.name = params.name;
        };
        if (params.remark !== undefined) {
            where.remark = params.remark;
        };

        return menuModel.findAll({
            where: where,
            order: [
                ['departmentID', 'desc']
            ],
            offset: page.offset,
            limit: page.limit
        });
    },

    createDepartment: (params) =>
        menuModel.create({
            name: params.name,
            remark:params.remark,
        }),
    modifyDepartment: (params) =>
        menuModel.update(
            params,
            {
           'where':{
               'departmentID':params.departmentID
           }
        })

};