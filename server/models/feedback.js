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
    email: {
      type: String,
      default: "",
    },
    feedback: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Feedback = mongoose.model("Feedback", schema);

module.exports = Feedback;
