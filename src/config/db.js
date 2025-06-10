const { set, connect } = require('mongoose')

module.exports = databaseConnection = async () => {
    try {
        set('strictQuery', true)
        await connect(process.env.MONGO_URI)
        console.log('Database connected successfully')
    } catch(err) {
        console.log(`Database connection error: ${err}`)
        process.exit(1)
    }
}