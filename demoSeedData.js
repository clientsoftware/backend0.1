const demoParties = [
  { id: "P-101", name: "Bismillah Electric & Rewinding Works", type: "customer", phone: "0300-1234567", address: "Electric Market, Lahore", openingBalance: 0, balance: 14500 },
  { id: "P-102", name: "Pakistan Copper & Cable Wholesalers", type: "supplier", phone: "0321-9876543", address: "Brandreth Road, Lahore", openingBalance: 0, balance: -65000 },
  { id: "P-103", name: "Tariq Motor Rewinding Shop", type: "customer", phone: "0333-5554433", address: "G.T Road, Gujranwala", openingBalance: 0, balance: 9200 },
  { id: "P-104", name: "Lahore Copper Foundry & Scrap Dealer", type: "supplier", phone: "0345-7778899", address: "Badami Bagh, Lahore", openingBalance: 0, balance: -18000 }
];

const demoItems = [
  { id: "ITM-01", name: "Super Enamelled Copper Wire 22 SWG", code: "CW22", barcode: "89640001", category: "Copper Wire", unit: "KG", purchasePrice: 3450, salePrice: 3850, stock: 85, minStock: 15, openingQty: 100 },
  { id: "demo-pipe-dual", name: "GI Pipe 1.5\" (Heavy) [Demo Dual-Unit]", nameUrdu: "جی آئی پائپ (ڈیمو)", code: "GIP-01", barcode: "1001", category: "Hardware / Pipes", unit: "KG", purchasePrice: 600, salePrice: 900, stock: 250, minStock: 15, openingQty: 250, altUnit: "Foot", altUnitFactor: 3, altUnitPrice: 300 },
  { id: "ITM-02", name: "Copper Wire 24 SWG (Pakistan Cables)", code: "CW24", barcode: "89640002", category: "Copper Wire", unit: "KG", purchasePrice: 3500, salePrice: 3900, stock: 60, minStock: 10, openingQty: 75 },
  { id: "ITM-03", name: "Purana Tamba / Copper Scrap (Exchange)", code: "SCRAP-CU", barcode: "89640003", category: "Copper Scrap", unit: "KG", purchasePrice: 3100, salePrice: 3300, stock: 140, minStock: 20, openingQty: 100 },
  { id: "ITM-04", name: "Electric Motor 2HP 3-Phase 1440 RPM", code: "MOT-2HP", barcode: "89640004", category: "Motors", unit: "Unit", purchasePrice: 15500, salePrice: 18500, stock: 12, minStock: 3, openingQty: 15 },
  { id: "ITM-05", name: "Motor Rewinding Labour (1HP to 5HP)", code: "LAB-REW", barcode: "89640005", category: "Labour & Services", unit: "Job", purchasePrice: 1200, salePrice: 2500, stock: 999, minStock: 0, openingQty: 0 },
  { id: "ITM-06", name: "Fuji Capacitor 3.5 uF (Fan/Motor)", code: "CAP-35", barcode: "89640006", category: "Accessories", unit: "Pcs", purchasePrice: 210, salePrice: 280, stock: 150, minStock: 25, openingQty: 180 }
];

const demoInvoices = [
  {
    id: "INV-001", number: "S-0001", type: "sale", date: new Date().toISOString().slice(0, 10),
    partyId: "P-101", partyName: "Bismillah Electric & Rewinding Works", customerPhone: "0300-1234567",
    items: [
      { itemId: "ITM-01", name: "Super Enamelled Copper Wire 22 SWG", qty: 5, price: 3850, unit: "KG", total: 19250 }
    ],
    tradeInItems: [
      { itemId: "ITM-03", name: "Purana Tamba / Copper Scrap (Exchange)", qty: 4, price: 3100, unit: "KG", total: 12400 }
    ],
    subtotal: 19250, discount: 250, discountType: "rs", discountValue: 250, total: 6600,
    paidCash: 3000, paidBank: 0, paidAmount: 3000, paymentType: "credit", paymentMethod: "cash",
    previousBalance: 10900, balanceAfter: 14500, description: "New 22 SWG Wire Purchase with 4KG Old Copper Scrap Trade-In", salesman: "Rashid Ustaad", status: "completed"
  }
];

const demoExpenses = [
  { id: "EXP-01", date: new Date().toISOString().slice(0, 10), category: "Electricity", amount: 18500, description: "Rewinding Shop Electricity Bill (LESCO Commercial)", paymentMethod: "bank" },
  { id: "EXP-02", date: new Date().toISOString().slice(0, 10), category: "Rent", amount: 40000, description: "Main Shop Monthly Rent", paymentMethod: "cash" },
  { id: "EXP-03", date: new Date().toISOString().slice(0, 10), category: "Tea & Lunch", amount: 3200, description: "Ustaad & Karigar Refreshment", paymentMethod: "cash" }
];

const demoBankAccounts = [
  { id: "B-01", name: "Meezan Bank (Electric Store)", accountNumber: "0102030405060708", openingBalance: 280000 },
  { id: "B-02", name: "JazzCash Business", accountNumber: "03001234567", openingBalance: 45000 }
];

const demoEmployees = [
  { id: "EMP-01", name: "Rashid Ustaad", designation: "Head Rewinder / Master", phone: "0312-3456789", monthlySalary: 55000, joinDate: "2023-01-15" },
  { id: "EMP-02", name: "Tariq Mehmood", designation: "Store Salesman & Cashier", phone: "0300-9876543", monthlySalary: 38000, joinDate: "2023-06-01" }
];

module.exports = {
  demoParties,
  demoItems,
  demoInvoices,
  demoExpenses,
  demoBankAccounts,
  demoEmployees
};
