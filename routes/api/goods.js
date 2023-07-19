const express = require('express')
const ctrl = require('../../controllers/goods');
const { validateBody } = require('../../decorators');
const { schemas } = require('../../models/goods');
// const { isValidId } = require('../../middlewares');

const router = express.Router();

router.get('/:shopId/goods', ctrl.getGoods);
router.post('/:shopId/goods', validateBody(schemas.addGoodsSchema), ctrl.addGoods);
// router.delete('/:goodsId', isValidId, ctrl.deleteGoods);

module.exports = router;