const {getAllCategories} = require('./controllers/categories.controllers')

const {getReviewById, getAllReviews, getCommentsByReviewId, postCommentByReviewId, patchReviewLikes} = require('./controllers/reviews.controllers')
const express = require('express')
const {serverError,customErrors,psqlErrors} = require('./error-handling/errorcontrollers')


const app = express()

app.use(express.json())

app.get('/api/categories', getAllCategories)
app.get('/api/reviews/:id', getReviewById)
app.get('/api/reviews', getAllReviews)
app.post('/api/reviews/:id/comments', postCommentByReviewId)
app.get('/api/reviews/:id/comments', getCommentsByReviewId)
app.patch('/api/reviews/:id', patchReviewLikes)


app.use(customErrors)
app.use(psqlErrors)
app.use(serverError)


module.exports = app
