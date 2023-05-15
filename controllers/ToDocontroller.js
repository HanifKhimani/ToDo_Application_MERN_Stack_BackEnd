// const ToDomodel = require('../models/ToDomodel')
const ToDoModel = require('../models/ToDomodel')
const ToDomodel = require('../models/ToDomodel')

module.exports.getToDo = async (req, res) => {
    const toDo = await ToDomodel.find()
    res.send(toDo)    
}

module.exports.saveToDo = async (req, res) => {

    const {text} = req.body

    ToDoModel
    .create({text})
    .then((data) => {
        console.log("Add Successfully");
        console.log(data);
        res.send(data)
    }) 
}

module.exports.updateToDo = async (req, res) => {
    const {_id, text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(() => res.set(201).send("Update Successfully"))
    .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const {_id} = req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => res.set(201).send("Delete Successfully"))
    .catch((err) => console.log(err))
}