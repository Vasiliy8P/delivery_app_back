const express = require('express')
const ctrl = require('../../controllers/shops');
const { validateBody } = require('../../decorators');
const { schemas } = require('../../models/shop');
const { isValidId } = require('../../middlewares');

const router = express.Router();

router.get('/', ctrl.listShops);
router.post('/', validateBody(schemas.addShopSchema), ctrl.addShop);
router.delete('/:shopId', isValidId, ctrl.deleteShop);

module.exports = router;
