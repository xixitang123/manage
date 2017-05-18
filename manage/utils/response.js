/**
 * Created by Administrator on 2017/5/9.
 */
/**
 * Error messages.
 */

'use strict';

const error = require('./error');

module.exports = {
    OK: 0,
    ParameterInvalid: new error.BaseError(      1,  'Parameter invalid.' ),
    DataNotFound:     new error.NotFoundError(  2,  'Data not found.' ),
    AccessDenied:     new error.AuthError(      3,  'Access denied.' ),
    DatabaseError:    new error.SystemError(    4,  'System error.' ),
    SecretInvalid:    new error.AccessError(    5,  'Password invalid.' ),
    UserRegistered:   new error.BaseError(      6,  'User has been registered.' ),

    success : (data, res) => {
        const result = {
            code: this.OK,
            message: 'OK',
            data: data
        };

        res.json(result);
    },

    error: (err, req, res) => {
        if (err instanceof error.BaseError) {
            // for instances of BaseError or sub classes
            // return error json and defined status(400, 401, 403, 404, 500)
            res.status(err.status).json(err);
        } else {
            // only providing error in development
            const e = req.app.get('env') === 'development' ? err : error.SystemError;

            // return error json and 500
            res.status(500).json(e);
            console.error(err);
        }
    }
};