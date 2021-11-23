import logger from './logger.js'

const pathNotFound = (req, res, next) => {
    const error = new Error(`Path Not Found -> ${req.url}`)
    res.status(404)
    next(error)
}

const errorHandler = (error, _req, res, _next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    logger.log.error(new Error(error.message))
    res.status(statusCode).send({
        message: error.message
    })
}

export default { pathNotFound, errorHandler }