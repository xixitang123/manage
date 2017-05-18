/**
 * Created by Administrator on 2017/5/9.
 */
'use strict';
module.exports = function(sequelize, DataTypes) {
    const privilege = sequelize.define('privilege', {
        pageID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pagetitle: DataTypes.STRING,
        pagename:DataTypes.STRING,
        parentid:DataTypes.INTEGER,
        remark:DataTypes.STRING,
        priority:DataTypes.INTEGER,
        title_url:DataTypes.STRING
    }, {
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,

        // define the table's name
        tableName: 'tbl_pages'
    });

    return privilege;
};
