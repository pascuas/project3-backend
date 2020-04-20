const express = require('express')
const router = express.Router()

const sectionController = require('../controllers/section')

router.get('/', sectionController.getAll)
router.get('/:sectId', sectionController.getById)
router.post('/:presId', sectionController.create)
router.put('/:sectId', sectionController.update)
router.delete('/:sectId', sectionController.remove)
router.delete('/', sectionController.removeAll)

// router.put('/addpoint/:presId/:sectId', sectionController.addTalkingPoint)


module.exports = router;
