const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    nameUrdu: { type: String, default: "" },
    code: { type: String, default: "" },
    barcode: { type: String, default: "" },
    category: { type: String, default: "General" },
    group: { type: String, default: "" },
    unit: { type: String, default: "Pcs" },
    purchasePrice: { type: Number, default: 0 },
    salePrice: { type: Number, default: 0 },
    labourRate: { type: Number, default: 0 },
    wholesalePrice: { type: Number, default: 0 },
    itemType: { type: String, default: "general" }, // "finished_copper", "scrap", "general"
    gauge: { type: String, default: "" }, // Wire Number / Gauge (e.g. 18, 20, 22)
    retailRate: { type: Number, default: 0 }, // Retail Rate per KG
    wholesaleLabourRate: { type: Number, default: 0 }, // Wholesale Labour Rate per KG
    factoryCostA: { type: Number, default: 0 }, // Factory A specific cost per KG
    factoryCostB: { type: Number, default: 0 }, // Factory B specific cost per KG
    stock: { type: Number, default: 0 },
    lowStock: { type: Number, default: 0 },
    minStock: { type: Number, default: 0 },
    openingQty: { type: Number, default: 0 },
    altUnit: { type: String, default: "" },
    altUnitFactor: { type: Number, default: 0 },
    altUnitPrice: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", ItemSchema);
