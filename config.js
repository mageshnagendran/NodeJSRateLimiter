
//const client = require('./redis-database');

class Limiter {

    constructor(app) {
        this.limiter = require('express-limiter')(app);
    }

/**
 * For API key values
 */checkApiKey() {
        return this.limiter({
            path: '/details/',
            method: 'get',
            lookup: async (request, response, opts, next) => {
                try {
                    const validKeyResult = await this.isValidApiKey(request.params.apiKey);
                    if (validKeyResult) {
                        opts.lookup = 'params.apiKey'
                        opts.total = 10
                    } else {
                        opts.lookup = 'connection.remoteAddress'
                        opts.total = 5
                    }
                } catch (error) {
                    opts.lookup = 'connection.remoteAddress'
                    opts.total = 5
                }
                return next()
            },
            total: 5,
            expire: 1000 * 60 * 60,
            onRateLimited: function (request, response, next) {
                response.status(429).json('You are not welcome here, Rate limit exceeded');
            }
        });
    }

    isValidApiKey(apiKey) {
    /**
    * Here based on `apiKey`  return true or false.
    *`apiKey` can be compared with any api key stored in database.
    */x
        return new Promise((resolve, reject) => {
            1 ? resolve(true) : reject(false);
        });
    }
}