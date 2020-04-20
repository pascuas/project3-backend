const Section = require('../models/section')
const Presentation = require('../models/presentation')

const getAll = (req, res) => {
    Section.find({}).then(sections => res.json(sections))
}

const getById = (req, res) => {
    Section.findById(req.params.sectId).then(section => res.json(section))
}

const create = (req, res) => {
    Section.create(req.body).then(sect => Presentation.findOne({_id:req.params.presId}).then(pres => {
        pres.sections.push(sect)
        pres.save()
        res.json(pres)
    }))
}

// const update = (req, res) => {
//     Model.Presentation.updateOne({_id: req.params.presId, "sections._id": req.params.sectId}, {"$set": {"sections.$": req.body}}).then(()=> Model.Presentation.find().then(prez =>{
//         res.json(prez)}))
// }

// const remove = (req, res) => {
//     Model.Presentation.findByIdAndUpdate(req.params.presId, {"$pull": {"sections": {_id:req.params.sectId}}}).then(() => Model.Presentation.find().then(prez =>{
//         res.json(prez)}))
// }

const removeAll = (req, res) => {
    Section.deleteMany({}).then(sections=> res.json(sections))
}

module.exports = {
    getAll,
    getById,
    create,
    removeAll
}