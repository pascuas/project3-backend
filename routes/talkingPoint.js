const express = require('express')
const router = express.Router()

const controller = require('../controllers/talkingpoints')
router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/:sectId', controller.create)
router.put('/:pointId', controller.update)
router.delete('/', controller.removeAll)
router.delete('/:pointId', controller.remove)


module.exports = router

