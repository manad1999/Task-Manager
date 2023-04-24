const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
    required:[true,"must provide Name"],
    trim:true,
    maxlength:[20,"Not more than 20"]

},
    completed:{
        type :Boolean,
        default:false
    },
})

module.exports = mongoose.model('Task', TaskSchema);

