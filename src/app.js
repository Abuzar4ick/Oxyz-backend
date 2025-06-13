const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const errorHandle = require('./middlewares/errorHandler')
const { consultationRoute, costRoute, newsRoute, adminRoute, adminAuthRoute, socialMediaRoute } = require('./routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(cors())

// routes
app.use('/api', consultationRoute, costRoute, newsRoute, socialMediaRoute)
app.use('/api/admin', adminRoute, adminAuthRoute)

// error handler
app.use(errorHandle)

module.exports = app