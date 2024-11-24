export const enquiryController = (req, res) => {
    try {
        // 1.Body Validation
        // 2.Google Sheet Entry
        // 3. Response Send

        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}

