const router = require('express').Router()

const Controller = require('../controllers/reportProductController');
const { errorHandler } = require('../middlewares/errorHandler');

router.get('/report-products', Controller.getAllReport)
router.use(errorHandler)

module.exports = router
