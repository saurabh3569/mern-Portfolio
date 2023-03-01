const mongoose = require('mongoose')

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('db connected...'.yellow);

    } catch (error) {
        console.log(error);
    }

}

module.exports = connectDB