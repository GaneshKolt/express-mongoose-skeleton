import httpErrors from 'http-errors'

import logger from './logger.js'

const pathNotFound = (req, res, next) => {
    next(httpErrors.NotFound(`Path Not Found -> ${req.url}`))
}

const errorHandler = (error, _req, res, _next) => {
    logger.log.error(new Error(error.message))
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message
        }
    })
}

export default { pathNotFound, errorHandler }