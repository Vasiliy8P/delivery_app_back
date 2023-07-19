const { ctrlWrapper } = require('../decorators');
const { HttpError } = require('../helpers');
const { Goods } = require('../models/goods');

const getGoods = async (req, res) => {
    const { shopId: shop } = req.params;
    const result = await Goods.find({shop}, "-createdAt -updatedAt");
    if (!result) {
        throw HttpError(404, "Not found");
    };
    res.json(result);
};

const addGoods = async (req, res) => {
    const { shopId } = req.params;    
    const result = await Goods.create({
        ...req.body,
        shop: shopId
    });
    res.status(201).json(result);
};

// const deleteGoods = () => {

// };


module.exports = {
    getGoods: ctrlWrapper(getGoods),
    addGoods: ctrlWrapper(addGoods),
    // deleteGoods: ctrlWrapper(deleteGoods),
};