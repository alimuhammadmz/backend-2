const express = require('express');
const {deleteTodoById, updateTodoById} = require('../services/todoService.js')

const todoDeleteController = async (req, res) =>{
    try{
        var filter = req.params.id;

        const deleted = await deleteTodoById(filter);
        if(deleted)        
            res.sendStatus(200);
        else
            res.sendStatus(204);
    }catch(err){
        res.status(500).send(err);
    }
}

const todoUpdateController = async (req, res) =>{
    try{
        const updates = req.body.updates;
        var filter = req.params.id;

        const updated = await updateTodoById(filter, updates);
        if(updated)        
            res.status(200).send({"message": updated});
        else{
            res.status(404).send("Not found!");
        }
    }catch(err){
        res.status(500).send(err);
    }
}

module.exports.todoDeleteController = todoDeleteController;
module.exports.todoUpdateController = todoUpdateController;