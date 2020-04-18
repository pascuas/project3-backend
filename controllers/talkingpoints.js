const Talkingpoints = require('../models/presentation')


const getAll = (req, res) => {
    Talkingpoints.Talkingpoints.find({}).then(talkingpoints=>{
        res.json(talkingpoints)
    })
}

const getById = (req, res) => {
    Talkingpoints.Talkingpoints.findById(req.params.id).then(talkingpoints => res.json(talkingpoints))
}

const create = (req, res) => {
    Talkingpoints.Talkingpoints.create(req.body).then(talkingpoints =>res.json(talkingpoints))
}

const update = (req, res) => {
    Talkingpoints.Talkingpoints.findByIdAndUpdate(req.params.id, req.body).then(talkingpoints => res.json(talkingpoints))
}

const remove = (req, res) => {
    Talkingpoints.Talkingpoints.remove({_id: req.params.id}).then(talkingpoints=> res.json(talkingpoints))
}

module.exports ={
    getAll,
    getById,
    create,
    update,
    remove,
}