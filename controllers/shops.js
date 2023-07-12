const { ctrlWrapper } = require('../decorators');
const { HttpError } = require('../helpers');
const { Shop } = require('../models/shop');

const listShops = async (req, res) => {
    const result = await Shop.find({}, "-createdAt -updatedAt");
    res.json(result);
};

const addShop = async (req, res) => {
    const result = await Shop.create({ ...req.body});
    res.status(201).json(result);
};

const deleteShop = async (req, res) => {
    const { shopId } = req.params;
    const result = await Shop.findByIdAndRemove(shopId);
    if (!result) {
        throw HttpError(404, "Not found");
    };
    res.send({
        message: "Shop deleted"
    });
};

module.exports = {
    listShops: ctrlWrapper(listShops),
    addShop: ctrlWrapper(addShop),
    deleteShop: ctrlWrapper(deleteShop),
};