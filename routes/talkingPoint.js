const express = require('express')
const router = express.Router()

const controller = require('../controllers/talkingpoints')
// router.get('/', controller.getAll)
// router.get('/:id', controller.getById)
router.post('/:presId/:sectId', controller.create)
// router.put('/:presId/:sectId/:pointId', controller.update)
// router.delete('/:sectId/:pointId', controller.removeAll)
router.delete('/:presId/:sectId/:pointId', controller.remove)


module.exports = router

