const questionsModel = require('../models/questions/questions-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (question) => questionsModel.findById(question)
const findQuestionsForQuiz = (quizId) => questionsModel.find(quizId)
module.exports = { findQuestionsForQuiz, findAllQuestions, findQuestionById}