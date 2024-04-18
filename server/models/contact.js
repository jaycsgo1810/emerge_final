const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      default: "",
    },
    contact: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Contacts = mongoose.model("Contacts", schema);

module.exports = Contacts;
