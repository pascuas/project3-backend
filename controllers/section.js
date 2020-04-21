const Section = require('../models/section')
const Presentation = require('../models/presentation')

const getAll = (req, res) => {
    Section.find({}).then(sections => res.json(sections))
}

const getById = (req, res) => {
    Section.findById(req.params.sectId).populate('talking_points').then(section => res.json(section))
}

const create = (req, res) => {
    Section.create(req.body).then(sect => Presentation.findOne({_id:req.params.presId}).then(pres => {
        pres.sections.push(sect._id)
        pres.save()
        res.json(pres)
    }))
}

const update = (req, res) => {
    Section.updateOne({_id: req.params.sectId}, {"$set": req.body}).then(sect => res.json(sect))
}

const remove = (req, res) => {
    Section.remove({_id: req.params.sectId}).then(sect => res.json(sect))
}

const removeAll = (req, res) => {
    Section.deleteMany({}).then(sections=> res.json(sections))
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    removeAll
}