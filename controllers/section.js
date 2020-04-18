const Section = require('../models/section')

const getAll = (req, res) => {
    Section.find().then(sections => res.json(sections))
}

const getById = (req, res) => {
    Section.findById(req.params.id).then(section => res.json(section))
}

const create = (req, res) => {
    Section.create(req.body).then(section => res.json(section))
}
const update = (req, res) => {
    Section.findByIdAndUpdate(req.params.id, req.body).then(section => res.json(section))
}

const remove = (req, res) => {
    Section.remove({_id: req.params.id}).then(section => res.json(section))
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}