// * Import NPM Modules
import express from 'express'

// * Import local JS files
import config from './config/config.js'
import logger from "./config/logger.js"

const app = express()
const { PORT } = config

// * Express Middlewares
app.use(logger.middleware)

app.get('/', (_, res) => {
    res.send({ msg: 'hello' })
})

app.listen(PORT, () => {
    logger.log.success(`Server is running on PORT ${PORT}`);
})