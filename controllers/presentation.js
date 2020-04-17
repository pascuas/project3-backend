const Presentation = require('../models/presentation')

const getAll = (req, res) => {
    Presentation.find().then(prez => res.json(prez)).then(()=> process.exit())
}

const getById = (req, res) => {
    Presentation.findById(req.params.id).then(prez => res.json(prez)).then(()=> process.exit())
}

const create = (req, res) => {
    Presentation.create(req.body).then(prez => res.json(prez)).then(()=> process.exit())
}
const update = (req, res) => {
    Presentation.findByIdAndUpdate(req.params.id, req.body).then(prez => res.json(prez)).then(()=> process.exit())
}

const remove = (req, res) => {
    Presentation.remove(req.params.id).then(prez => res.json(prez)).then(()=> process.exit())
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}