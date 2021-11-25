import logger from './logger.js'

const pathNotFound = (req, res, next) => {
    const error = new Error(`Path Not Found -> ${req.url}`)
    error.status = 404
    next(error)
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