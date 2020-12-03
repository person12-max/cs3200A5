const quizzesModel = require('../models/quizzes/quizzes-models.js')
const findAllQuizzes = () => quizzesModel.find()
const findQuizById = (quizId) => quizzesModel.findById(quizId)
module.exports = { findAllQuizzes, findQuizById }