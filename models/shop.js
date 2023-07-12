const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    icon: {
      type: String,
    //   required: [true, "Icon is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

shopSchema.post('save', handleMongooseError);

const addShopSchema = Joi.object({
    name: Joi.string().required(),
    icon: Joi.string()
      // .required(),
});

const schemas = {
    addShopSchema,
};

const Shop = model("shop", shopSchema);

module.exports = {
  Shop,
  schemas,
};

