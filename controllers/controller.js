/* QUESTIONS API */

const Questions = require ("../models/questionSchemas")
const Result = require ("../models/resultSchemas")
const questions  = require ("../database/data")
const {answers}  = require ("../database/data")

/* Fetch all questions */
const getQuestions = async (req, res) => {
    try {
        const question = await Questions.find()
        res.status(200).json(question)
    } catch (error) {
        res.json(error.message);
    }
}

/* Insert all questions */
const insertQuestions = async (req, res) => {
    try {
        Questions.insertMany({ questions, answers}, function (err, data) {
            res.json({message : "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({error})
    }
}

/* Delete all questions */
const deleteQuestions = async (req, res) => {
    try {
        await Questions.deleteMany();
        res.json({message: "Questions Deleted Successfully..."})
    } catch (error) {
        res.json({error})
    }
}

/* RESULTS API */

/* Get all results */
const getResults = async (req, res) => {
    try {
        const result = await Result.find()
        res.json(result)
    } catch (error) {
        res.json({error})
    }
}

/* post api results */
const storeResults = async (req, res) => {
    try {
        const { username, result, attempts, points, achieved } = req.body; //get the following from the user to store to the database
        if (!username && !result) throw new Error ("Data Not Provided...")

        Result.create({ username, result, attempts, points, achieved }, function(err, data) {
            res.json({message : "Result saved successfully..."})
        })
    } catch (error) { 
        res.json({error})
    }
}

/* delete results */
const dropResult = async  (req, res) => {
    try {
        await Result.deleteMany();
        res.json({message : "Result deleted successfully..."})
    } catch (error) {
        res.json({error})
    }
}


module.exports = {
    getQuestions,
    insertQuestions,
    deleteQuestions,
    getResults,
    storeResults,
    dropResult
}