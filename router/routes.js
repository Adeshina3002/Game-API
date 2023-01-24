const express = require ('express')

const router = express.Router()

// Questions api routes
router.get ('questions', (req, res) => {
    res.status(200).send('Fetch Quiz Questions')
})


module.exports = router