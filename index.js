// * Import NPM Modules
import express from 'express'

// * Import local JS files
import config from './config/config.js'

const app = express()
const { PORT } = config

app.get('/', (_, res) => {
    res.send({ msg: 'hello' })
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})