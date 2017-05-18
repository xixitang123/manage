'use strict';

const configModel = require('../models').config;
module.exports={
        configDepartment:(params)=>{
       configModel.findAll({
            where: where,
            order: [
                ['departmentID', 'desc']
            ],
            offset: page.offset,
            limit: page.limit
       }).then(function(result){
            console.log('query all departmentID');
            for (var i = 0, usr; usr = result[i++];) {
                console.log('departmentID=' + usr.departmentID + ', pageID=' + usr.pageID);
            }
       })

    }
}