const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
    const { shopId } = req.params;

    if (!isValidObjectId(shopId)) {
        next(HttpError(400, `${shopId} is no valid`));
    }

    next();
};

module.exports = isValidId;