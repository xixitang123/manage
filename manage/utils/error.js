/**
 * Created by Administrator on 2017/5/9.
 */
'use strict';

class BaseError extends Error {
    constructor(code, message) {
        super();
        this.code = code;
        this.message = message;
        this.status = 400;
    }
}

class AuthError extends BaseError {
    constructor(code, message) {
        super(code, message);
        this.status = 401;
    }
}

class AccessError extends BaseError {
    constructor(code, message) {
        super(code, message);
        this.status = 403;
    }
}

class NotFoundError extends BaseError {
    constructor(code, message) {
        super(code, message);
        this.status = 404;
    }
}

class SystemError extends BaseError {
    constructor(code, message) {
        super(code, message);
        this.status = 500;
    }
}

module.exports.BaseError = BaseError;
module.exports.AuthError = AuthError;
module.exports.AccessError = AccessError;
module.exports.NotFoundError = NotFoundError;
module.exports.SystemError = SystemError;