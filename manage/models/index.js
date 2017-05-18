/**
 * Created by Administrator on 2017/5/9.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const datasource = require('../config').datasource;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(datasource.database, datasource.username, datasource.password, datasource);
const db = {};
fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach(function(file) {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});
db.Sequelize = Sequelize;

module.exports = db;