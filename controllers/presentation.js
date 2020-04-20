const Presentation = require('../models/presentation')

const getAll = (req, res) => {
    Presentation.find({}).then(prez => res.json(prez))
}

const getById = (req, res) => {
    Presentation.findById(req.params.id).then(prez => res.json(prez))
}

const create = (req, res) => {
    Presentation.create(req.body).then(prez => res.json(prez))
}
const update = (req, res) => {
    Presentation.findByIdAndUpdate(req.params.id, req.body).then(prez => res.json(prez))
}

const remove = (req, res) => {
    Presentation.remove({_id: req.params.id}).then(prez => res.json(prez))
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}