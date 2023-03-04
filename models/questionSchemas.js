const mongoose = require ("mongoose")

/** question models */
const questionModel = new mongoose.Schema ({
    questions :  {type : Array, default : []},
    answers : {type : Array, default : []},
    createdAt : {type : Date, default : Date.now}
})

const Questions = mongoose.model('Questions', questionModel)

module.exports = Questions 