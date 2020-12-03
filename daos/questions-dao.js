const questionsModel = require('../models/questions/questions-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (questionId) => questionsModel.findById(questionId)
const findQuestionsForQuiz = (quizId) => questionsModel.find(quizId)
module.exports = { findQuestionsForQuiz, findAllQuestions, findQuestionById}