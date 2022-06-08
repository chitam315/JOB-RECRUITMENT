const mongoose = require('mongoose')

async function connect () {
    try {
        await mongoose.connect('mongodb://localhost:27017/JOB_RECRUITMENT');
        console.log('Connect successfully !!!');
    } catch (error) {
        console.log('Connect failed !!!');
        throw error
    }
}

module.exports = {connect}