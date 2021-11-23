import dotenv from 'dotenv'
import joi from 'joi'

dotenv.config()

// * Define & Validate ENV file using "JOI"
const envSchema = joi.object().keys({
    NODE_ENV: joi.string().valid('development', 'production').required(),
    PORT: joi.number().positive().required()
}).unknown()

const { value: env, error } = envSchema.prefs({ errors: { label: 'key' } }).validate(process.env)
if (error) throw new Error(`ENV Validation Error -> ${error.message}`)

// * Export the necessary ENV Variables
export default { NODE_ENV: env.NODE_ENV, PORT: env.PORT }