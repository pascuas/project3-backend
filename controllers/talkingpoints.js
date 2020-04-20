const TalkingPoint = require('../models/talkpoint')
const Section = require('../models/section')


// const getAll = (req, res) => {
//     Talkingpoints.TalkingPoint.find().then(talkingpoints=>{
//         res.json(talkingpoints)
//     })
// }

// const getById = (req, res) => {
//     Talkingpoints.TalkingPoint.findById(req.params.id).then(talkingpoints => res.json(talkingpoints))
// }

const create = (req, res) => {
    TalkingPoint.create(req.body).then(point => Section.findOne({_id:req.params.sectId}).then(sect => {
        sect.talking_points.push(point._id)
        sect.save()
        res.json(sect)
    }))
}

const remove = (req, res) => {
    TalkingPoint.remove({_id: req.params.presId}).then(point => res.json(point))
}

// const update = (req, res) => {
//     Model.Presentation.updateOne({_id: req.params.presId, "sections._id": req.params.sectId, "talking_points._id": req.params.pointId}, {$set: {"sections.$": {"talking_points.$": req.body}}}).then(pre => Model.Presentation.find().then(prez =>{
//         res.json(prez)}))
// }

// const removeAll = (req, res) => {
//     Talkingpoints.TalkingPoint.deleteMany({}).then(talkingpoints=> res.json(talkingpoints))
// }

module.exports ={
    create,
    remove
}