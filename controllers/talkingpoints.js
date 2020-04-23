const TalkingPoint = require('../models/talkpoint')
const Section = require('../models/section')


const getAll = (req, res) => {
    TalkingPoint.find({}).then(talkingpoints=>{
        res.json(talkingpoints)
    })
}

const getById = (req, res) => {
    TalkingPoint.findById(req.params.id).then(talkingpoint => res.json(talkingpoint))
}

const create = (req, res) => {
    TalkingPoint.create(req.body).then(point => Section.findOne({_id:req.params.sectId}).then(sect => {
        sect.talking_points.push(point._id)
        sect.save()
        res.json(sect)
    }))
}

const remove = (req, res) => {
    TalkingPoint.remove({_id: req.params.pointId}).then(point => res.json(point))
}

const update = (req, res) => {
    TalkingPoint.updateOne({_id: req.params.pointId}, {"$set": req.body}).then(point => res.json(point))
}

const removeAll = (req, res) => {
    TalkingPoint.deleteMany({}).then(talkingpoints=> res.json(talkingpoints))
}

module.exports ={
    getAll,
    getById,
    create,
    remove,
    update,
    removeAll
}