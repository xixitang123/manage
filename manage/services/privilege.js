/**
 * Created by Administrator on 2017/5/9.
 */
const privilegeModel = require('../models').privilege;
module.exports= {
    findPrivilege: (params, page) => {
        const where = {};
        if (params.pageID !== undefined) {
            where.pageID = params.pageID;
        }
        if (params.pagetitle !== undefined) {
            where.pagetitle = params.pagetitle;
        }
        if (params.pagename !== undefined) {
            where.pagename = params.pagename;
        }
        if (params.parentid !== undefined) {
            where.parentid = params.parentid;
        }
        if (params.remark !== undefined) {
            where.remark = params.remark;
        }
        if (params.priority !== undefined) {
            where.priority = params.priority;
        }
        if (params.title_url !== undefined) {
            where.title_url = params.title_url;
        }
        return privilegeModel.findAll({
            where: where,
            order: [
                ['pageID', 'desc']
            ],
            offset: page.offset,
            limit: page.limit
        })
    }
}