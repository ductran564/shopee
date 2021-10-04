const mongoose = require('mongoose');

async function connect () {
    try {
        await mongoose.connect('mongodb://localhost:27017/shoppee'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        };
        
        console.log('connect Successfully!!')
    } catch (error) {
        console.log('connect Error!!')
    }
}

module.exports = {connect};