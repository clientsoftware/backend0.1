const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    date: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String, default: "" },
    paymentMethod: { type: String, default: "cash" },
    paymentBankId: { type: String, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", ExpenseSchema);
