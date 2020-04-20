const express = require('express')
const router = express.Router()

const sectionController = require('../controllers/section')

router.get('/', sectionController.getAll)
router.get('/:sectId', sectionController.getById)
router.post('/:presId', sectionController.create)
router.put('/:presId/:sectId', sectionController.update)
router.delete('/:presId/:sectId', sectionController.remove)
// router.delete('/', sectionController.removeAll)

// router.put('/addpoint/:presId/:sectId', sectionController.addTalkingPoint)


module.exports = router;
