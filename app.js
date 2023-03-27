const {getAllCategories} = require('./controllers/categories.controllers')
const {getReviewById, getAllReviews} = require('./controllers/reviews.controllers')
const express = require('express')
const {serverError,customErrors,invalidInputTypeError} = require('./error-handling/index')

const app = express()

app.get('/api/categories', getAllCategories)
app.get('/api/reviews/:id', getReviewById)
app.get('/api/reviews', getAllReviews)

app.use(customErrors)
app.use(invalidInputTypeError)
app.use(serverError)


module.exports = app