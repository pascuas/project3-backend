const express = require('express')
const router = express.Router()

const sectionController = require('../controllers/section')

// router.get('/', sectionController.getAll) << not a real use case
router.get('/:id', sectionController.getById)
// get by Presentation
router.post('/', sectionController.create)
router.put('/:id', sectionController.update)
router.delete('/:id', sectionController.remove)

module.exports = router;
