const Model = require('../models/presentation')

const getAll = (req, res) => {
    Model.Presentation.find().then(prez => res.json(prez))
}

const getById = (req, res) => {
    Model.Presentation.findById(req.params.id).then(prez => res.json(prez))
}

const create = (req, res) => {
    Model.Presentation.create(req.body).then(prez => res.json(prez))
}
const update = (req, res) => {
    Model.Presentation.findByIdAndUpdate(req.params.id, req.body).then(prez => res.json(prez))
}

const remove = (req, res) => {
    Model.Presentation.remove({_id: req.params.id}).then(prez => res.json(prez))
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}