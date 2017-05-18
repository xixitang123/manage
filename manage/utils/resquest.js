/**
 * Created by Administrator on 2017/5/9.
 */
'use strict';

class Page {
    constructor(params) {
        this.offset = (params.page || 0) * (params.size || 10);
        this.limit = parseInt(params.size) || 10;
        if (params.order != undefined) {
            this.order = params.order;
        }
    }
}

module.exports = {
    getPage: (params) => new Page(params)
};