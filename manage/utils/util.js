/**
 * Created by Administrator on 2017/5/9.
 */
'use strict';

const crypto = require('crypto');
const format = require('biguint-format');

module.exports = {

    random: function(length) {
        return crypto.randomBytes(length);
    },

    randomNumeric: function(length) {
        const randomNumber = Math.floor(Math.random() * Math.pow(10, length));
        return format(randomNumber.toString(16), 'dec', {padstr:'0', size:length});
    },

    formatInteger: function(value, length) {
        return format(value.toString(16), 'dec', {padstr:'0', size:length});
    }
};