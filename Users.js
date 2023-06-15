const mongoose = require('moongoose');

const UsersSchema = new mongoose.Schema({
    name:{
        //id will be here automaticly?
        type: String,
        required: true,
        unique: true,
        maxlength: [20,'Name can not be more than 20 characters']
    }
});

module.exports = mongoose.model('Users',UsersSchema);