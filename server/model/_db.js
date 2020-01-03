const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://127.0.0.1:27017/jolotestdb?retryWrites=true&w=majority', 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, 
    (err) => {
        if(!err) { console.log('MongoDB Connection Succeeded.') }
        else { console.log('MongoDB Connection error : ' + err) }
    }
);

require('./conversation.model');
require('./dialogue.model');
