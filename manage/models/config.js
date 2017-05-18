'use strict';

module.exports = function(sequelize, DataTypes) {
    const config = sequelize.define('config', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        departmentID: DataTypes.INTEGER,
        pageID: DataTypes.INTEGER,
        remark:DataTypes.STRING
    }, {
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,

        // define the table's name
        tableName: 'tbl_privilege'
    });

    return config;
};
