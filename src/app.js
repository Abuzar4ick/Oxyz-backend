const express = require('express')
const app = express()
const errorHandle = require('./middlewares/errorHandler')
const cors = require('cors')
const path = require('path')
const { consultationRoute, costRoute, newsRoute, adminRoute, adminAuthRoute } = require('./routes')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(cors())

// routes
app.use('/api', consultationRoute, costRoute, newsRoute)
app.use('/api/admin', adminRoute, adminAuthRoute)

// error handler
app.use(errorHandle)

module.exports = app