const mongoose = require('mongoose');
const taskSchema = mongoose.Schema({
    creatorId: {type: String, required: true},
    course: {type: String, required: true},
    assignment: {type: String, required: true},
    dueDate: {type: String, required: true},
    completed: {type: Boolean, required:true}
});

module.exports = mongoose.model('Assignment',taskSchema);

