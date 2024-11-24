import { ZodError } from 'zod'
import { enquirySchema } from '../helper/validator.js'

export const enquiryController = (req, res) => {
    try {
        // 1.Body Validation
        const body = enquirySchema.parse(req.body)
        const { name, category, emailAddress, message } = body

        // 2.Google Sheet Entry

        // 3. Response Send

        res.sendStatus(200)
    } catch (err) {
        if (err instanceof ZodError) {
            return res.status(422).json({
                success: false,
                message: err.errors
            })
        }
        res.sendStatus(500)
    }
}

