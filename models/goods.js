const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const goodsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    price: {
        type: String,
        required: [true, "Price is required"],
    },
    shop: {
        type: String,
        required: [true, "Shop is required"],
    }
  },
  { versionKey: false, timestamps: true }
);

goodsSchema.post('save', handleMongooseError);

const addGoodsSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.string().required(),
});

const schemas = {
    addGoodsSchema,
};

const Goods = model("goods", goodsSchema);

module.exports = {
  Goods,
  schemas,
};
