const mongoose = require("mongoose");

const BankAccountSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    accountNumber: { type: String, default: "" },
    openingBalance: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BankAccount", BankAccountSchema);
