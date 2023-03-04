const express = require ('express')

/* Import controller */
const controller = require ('../controllers/controller')

const router = express.Router()

/* Questions api routes */
router.get ('/questions', controller.getQuestions)
router.post ('/questions', controller.insertQuestions)
router.delete ('/questions', controller.deleteQuestions)


/* Results api routes */
router.route ('/results')
        .get (controller.getResults)
        .post (controller.storeResults)
        .delete (controller.dropResult)

        

module.exports = router