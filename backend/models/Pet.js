const { Schema, model } = require("mongoose");

const Pet = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  breed: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, default: "" },
});

module.exports = model("Pet", Pet);
