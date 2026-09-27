const mongoose = require("mongoose");

const LedgerDataSchema = new mongoose.Schema(
  {
    storeId: { type: String, default: "default-store", unique: true },
    parties: { type: Array, default: [] },
    items: { type: Array, default: [] },
    invoices: { type: Array, default: [] },
    ledger: { type: Array, default: [] },
    expenses: { type: Array, default: [] },
    otherIncome: { type: Array, default: [] },
    groups: { type: Array, default: [] },
    customUnits: { type: Array, default: [] },
    bankAccounts: { type: Array, default: [] },
    cashTxns: { type: Array, default: [] },
    users: { type: Array, default: [] },
    transfers: { type: Array, default: [] },
    employees: { type: Array, default: [] },
    attendance: { type: Array, default: [] },
    production: { type: Array, default: [] },
    productionItems: { type: Array, default: [] },
    salaries: { type: Array, default: [] },
    counters: { type: Object, default: {} },
    business: { type: Object, default: {} },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LedgerData", LedgerDataSchema);
