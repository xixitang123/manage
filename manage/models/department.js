/**
 * Created by Administrator on 2017/5/9.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
    const department = sequelize.define('department', {
        departmentID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: DataTypes.STRING,
        remark: DataTypes.STRING
    }, {
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,

        // define the table's name
        tableName: 'tbl_department'
    });

    return department;
};
