var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://younes:pp8JEM2Ve3mzbBRN@cluster0.v58e3.mongodb.net/mymoovizapp?retryWrites=true&w=majority', {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
