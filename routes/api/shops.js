const express = require('express')
const ctrl = require('../../controllers/shops');

const router = express.Router();

router.get('/', ctrl.getAll);

router.post('/', ctrl.addShop);

router.delete('/:shopId', ctrl.deleteShop);

module.exports = router;
