const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    type: { type: String, required: true },
    date: { type: String, required: true },
    partyId: { type: String, default: null },
    partyName: { type: String, default: "" },
    customerPhone: { type: String, default: "" },
    items: { type: Array, default: [] },
    tradeInItems: { type: Array, default: [] },
    subtotal: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    discountType: { type: String, default: "rs" },
    discountValue: { type: Number, default: 0 },
    shipping: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    paidCash: { type: Number, default: 0 },
    paidBank: { type: Number, default: 0 },
    paidAmount: { type: Number, default: 0 },
    paymentType: { type: String, default: "credit" },
    paymentMethod: { type: String, default: "cash" },
    paymentBankId: { type: String, default: null },
    previousBalance: { type: Number, default: 0 },
    balanceAfter: { type: Number, default: 0 },
    description: { type: String, default: "" },
    terms: { type: String, default: "" },
    salesman: { type: String, default: "" },
    status: { type: String, default: "open" },
    createdBy: { type: String, default: "" },
    paidScrapReceived: { type: Number, default: 0 },
    pendingScrap: { type: Number, default: 0 },
    saleCategory: { type: String, default: "retail" }, // "retail" (Full rate) or "wholesale" (Labour only)
    scrapType: { type: String, default: "" }, // e.g. "Copper Chheelar", "Wire Scrap"
    scrapQty: { type: Number, default: 0 }, // in KG
    scrapRate: { type: Number, default: 0 }, // Rs per KG if purchased
    scrapAmount: { type: Number, default: 0 },
    labourTotal: { type: Number, default: 0 }, // Total Labour billed
    factoryId: { type: String, default: "" },
    factoryName: { type: String, default: "" },
    processLoss: { type: Number, default: 0 }, // weight loss in kg
    processLossPercent: { type: Number, default: 0 },
    batchNumber: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", InvoiceSchema);
