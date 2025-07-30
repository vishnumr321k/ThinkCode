const mongoose = require('mongoose');


module.exports.connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/thinkCode-db');
        console.log('The data base creation completed! 🎉');
    } catch (error) {
        console.log('The data base creation failed! 🥲');
    }
}