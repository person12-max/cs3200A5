const questionsModel = require('../models/questions/questions-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (questionId) => questionsModel.findById(questionId)
const findQuestionsForQuiz = (qId => questionsModel.find({quizId : qId})
module.exports = { findQuestionsForQuiz, findAllQuestions, findQuestionById}