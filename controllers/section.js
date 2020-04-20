const Model = require('../models/presentation')

const getAll = (req, res) => {
    Model.Section.find().then(sections => res.json(sections))
}

const getById = (req, res) => {
    Model.Section.findById(req.params.sectId).then(section => res.json(section))
}

const create = (req, res) => {
    Model.Presentation.updateOne({_id:req.params.presId},{$push: {"sections": req.body}}).then(() => Model.Section.create(req.body).then( () => Model.Presentation.find().then(prez =>{
        res.json(prez)})))
}

const update = (req, res) => {
    Model.Presentation.updateOne({_id: req.params.presId, "sections._id": req.params.sectId}, {"$set": {"sections.$": req.body}}).then(()=> Model.Presentation.find().then(prez =>{
        res.json(prez)}))
}

const remove = (req, res) => {
    Model.Presentation.findByIdAndUpdate(req.params.presId, {"$pull": {"sections": {_id:req.params.sectId}}}).then(() => Model.Presentation.find().then(prez =>{
        res.json(prez)}))
}

// const removeAll = (req, res) => {
//     Model.Section.deleteMany({}).then(sections=> res.json(sections))
//


module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}