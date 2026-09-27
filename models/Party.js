const mongoose = require("mongoose");

const PartySchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    type: { type: String, enum: ["customer", "supplier", "retail"], default: "customer" },
    phone: { type: String, default: "" },
    address: { type: String, default: "" },
    openingBalance: { type: Number, default: 0 },
    balance: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Party", PartySchema);
