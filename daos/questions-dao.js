const questionsModel = require('../models/questions/questions-models.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (questionId) => questionsModel.findById(questionId)
const findQuestionsForQuiz = (quizId) => questionsModel.find(quizId)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz}