const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    code: { type: String, default: "" },
    barcode: { type: String, default: "" },
    category: { type: String, default: "General" },
    unit: { type: String, default: "Pcs" },
    purchasePrice: { type: Number, default: 0 },
    salePrice: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    minStock: { type: Number, default: 0 },
    openingQty: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", ItemSchema);
