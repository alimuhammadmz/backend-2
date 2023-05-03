const Todo = require('../models/todoModel.js');

const deleteTodoById = async (id) =>{
    const todoDeleted =  await Todo.findOneAndDelete({_id : id});
    if(todoDeleted){
        return todoDeleted;
    }
}

const updateTodoById = async(id, updates) =>{
    const todoUpdated =  await Todo.findOneAndUpdate({_id : id}, updates, {new: true});
    if(todoUpdated){
        return todoUpdated;
    }
}

module.exports.deleteTodoById = deleteTodoById;
module.exports.updateTodoById = updateTodoById;