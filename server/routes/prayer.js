const express = require('express')
const router = express.Router()


const {updatePrayer, getPrayers, postPrayers} = require('../controllers/prayerController')

router.get('/', getPrayers)

router.patch('/:id',updatePrayer)

router.post('/',postPrayers)

module.exports = router