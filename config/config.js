// * Import NPM Modules
import dotenv from 'dotenv'
import joi from 'joi'

// * Import local JS files
import logger from "../utils/logger.js"

dotenv.config()

// ? Define & Validate ENV file using "JOI"
const envSchema = joi.object().keys({
    NODE_ENV: joi.string().valid('development', 'production').required(),
    PORT: joi.number().positive().required(),
    ALLOWED_ORIGINS: joi.string().required()
}).unknown()

const { value: env, error } = envSchema.prefs({ errors: { label: 'key' } }).validate(process.env)
if (error) logger.log.error(new Error(`ENV Validation Error -> ${error.message}!!! Please check the ENV File...`))

// * Export the necessary ENV Variables
export default {
    NODE_ENV: env.NODE_ENV,
    PORT: env.PORT,
    ALLOWED_ORIGINS: env.ALLOWED_ORIGINS.split(",") || '*'
}