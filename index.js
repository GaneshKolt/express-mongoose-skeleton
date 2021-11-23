// * Import NPM Modules
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

// * Import local JS files
import config from './config/config.js'
import logger from "./utils/logger.js"

const app = express()
const { PORT } = config

// * Express Middlewares
app.use(logger.middleware)
app.use(helmet());
app.use(cors({
    origin: config.ALLOWED_ORIGINS,
}))

app.get('/', (_, res) => {
    res.send({ msg: 'hello' })
})

app.listen(PORT, () => {
    logger.log.success(`Server is running on PORT ${PORT}`);
})