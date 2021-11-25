// * Import NPM Modules
import mongoose from 'mongoose'

// * Import local JS files
import config from '../config/config.js'
import logger from '../utils/logger.js'

const dbOptions = {
    dbName: config.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}


const connectDb = () => {
    mongoose.connect(config.DB_URI, dbOptions)

    mongoose.connection.on('connected', () => {
        logger.log.success('Mongoose connected to db')
    })

    mongoose.connection.on('error', (err) => {
        logger.log.error(err.message)
        process.exit(1)
    })

    mongoose.connection.on('disconnected', () => {
        logger.log.info('Mongoose connection is disconnected.')
    })
}

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    process.exit(0)
})

export default connectDb