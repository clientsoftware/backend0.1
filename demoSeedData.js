const demoParties = [
  {
    id: "pty-f1",
    name: "Ittehad Copper Mills (Factory A)",
    type: "factory",
    phone: "0300-4123456",
    address: "Badami Bagh Industrial Area, Lahore",
    openingBalance: 0,
    balance: 0,
    openingScrapBalance: 0,
    scrapBalance: 0,
    specialRates: {}
  },
  {
    id: "pty-f2",
    name: "Mughal Metals Processing (Factory B)",
    type: "factory",
    phone: "0321-7654321",
    address: "Bund Road, Lahore",
    openingBalance: 0,
    balance: 0,
    openingScrapBalance: 0,
    scrapBalance: 0,
    specialRates: {}
  },
  {
    id: "pty-c1",
    name: "Lahore Electric & Transformers",
    type: "customer",
    phone: "0301-8889991",
    address: "Shah Alam Market, Lahore",
    openingBalance: 125000,
    balance: 129800,
    openingScrapBalance: 150,
    scrapBalance: 150,
    specialRates: { wholesaleLabourRate: 48, retailRate: 2720 }
  },
  {
    id: "pty-c2",
    name: "Bilal Rewinding Works",
    type: "customer",
    phone: "0333-5554433",
    address: "Brandreth Road, Lahore",
    openingBalance: 45000,
    balance: 125400,
    openingScrapBalance: 0,
    scrapBalance: 0,
    specialRates: { retailRate: 2680 }
  },
  {
    id: "pty-s1",
    name: "Haji Scrap Merchants",
    type: "supplier",
    phone: "0302-3344556",
    address: "Misri Shah Copper Market, Lahore",
    openingBalance: 0,
    balance: 0,
    openingScrapBalance: 0,
    scrapBalance: 0,
    specialRates: {}
  }
];

const demoItems = [
  {
    id: "itm-cp-18",
    name: "Finished Copper Wire 18 SWG",
    nameUrdu: "کاپر وائر 18 نمبر",
    code: "CW-018",
    barcode: "890100180001",
    category: "Finished Copper",
    group: "Copper Wire",
    unit: "kg",
    purchasePrice: 2500,
    salePrice: 2750,
    labourRate: 50,
    wholesalePrice: 2700,
    itemType: "finished_copper",
    gauge: "18 SWG",
    retailRate: 2750,
    wholesaleLabourRate: 50,
    factoryCostA: 2500,
    factoryCostB: 2540,
    stock: 450,
    lowStock: 100
  },
  {
    id: "itm-cp-20",
    name: "Finished Copper Wire 20 SWG",
    nameUrdu: "کاپر وائر 20 نمبر",
    code: "CW-020",
    barcode: "890100200002",
    category: "Finished Copper",
    group: "Copper Wire",
    unit: "kg",
    purchasePrice: 2550,
    salePrice: 2800,
    labourRate: 55,
    wholesalePrice: 2750,
    itemType: "finished_copper",
    gauge: "20 SWG",
    retailRate: 2800,
    wholesaleLabourRate: 55,
    factoryCostA: 2550,
    factoryCostB: 2580,
    stock: 320,
    lowStock: 80
  },
  {
    id: "itm-cp-22",
    name: "Finished Copper Wire 22 SWG",
    nameUrdu: "کاپر وائر 22 نمبر",
    code: "CW-022",
    barcode: "890100220003",
    category: "Finished Copper",
    group: "Copper Wire",
    unit: "kg",
    purchasePrice: 2600,
    salePrice: 2850,
    labourRate: 60,
    wholesalePrice: 2800,
    itemType: "finished_copper",
    gauge: "22 SWG",
    retailRate: 2850,
    wholesaleLabourRate: 60,
    factoryCostA: 2600,
    factoryCostB: 2620,
    stock: 210,
    lowStock: 50
  },
  {
    id: "itm-sc-1",
    name: "Heavy Copper Scrap (Chheelar)",
    nameUrdu: "بھاری کاپر سکریپ",
    code: "SCR-001",
    barcode: "890100990001",
    category: "Scrap",
    group: "Scrap",
    unit: "kg",
    purchasePrice: 2350,
    salePrice: 2400,
    labourRate: 0,
    wholesalePrice: 2380,
    itemType: "scrap",
    gauge: "Heavy Scrap",
    retailRate: 2400,
    wholesaleLabourRate: 0,
    factoryCostA: 0,
    factoryCostB: 0,
    stock: 680,
    lowStock: 200
  },
  {
    id: "itm-sc-2",
    name: "Motor Rewinding Scrap Copper",
    nameUrdu: "موٹر ری وائنڈنگ سکریپ",
    code: "SCR-002",
    barcode: "890100990002",
    category: "Scrap",
    group: "Scrap",
    unit: "kg",
    purchasePrice: 2280,
    salePrice: 2330,
    labourRate: 0,
    wholesalePrice: 2300,
    itemType: "scrap",
    gauge: "Motor Scrap",
    retailRate: 2330,
    wholesaleLabourRate: 0,
    factoryCostA: 0,
    factoryCostB: 0,
    stock: 420,
    lowStock: 150
  }
];

const demoInvoices = [
  {
    id: "inv-ws-1",
    number: "S-0001",
    type: "sale",
    date: new Date().toISOString().slice(0, 10),
    partyId: "pty-c1",
    partyName: "Lahore Electric & Transformers",
    customerPhone: "0301-8889991",
    saleCategory: "wholesale",
    withLabour: true,
    scrapType: "Heavy Copper Scrap",
    scrapQty: 100,
    paidScrapReceived: 100,
    pendingScrap: 0,
    items: [
      {
        itemId: "itm-cp-18",
        name: "Finished Copper Wire 18 SWG",
        unit: "kg",
        qty: 100,
        price: 48,
        basePrice: 0,
        labourCharge: 48,
        cost: 0,
        unitLabel: "kg",
        discount: 0
      }
    ],
    subtotal: 4800,
    discount: 0,
    total: 4800,
    paymentType: "credit",
    paidAmount: 0,
    paidCash: 0,
    paidBank: 0,
    previousBalance: 125000,
    balanceAfter: 129800,
    description: "Wholesale labour sale: 100kg finished wire against 100kg scrap received"
  },
  {
    id: "inv-rt-1",
    number: "S-0002",
    type: "sale",
    date: new Date().toISOString().slice(0, 10),
    partyId: "pty-c2",
    partyName: "Bilal Rewinding Works",
    customerPhone: "0333-5554433",
    saleCategory: "retail",
    withLabour: false,
    scrapQty: 0,
    paidScrapReceived: 0,
    pendingScrap: 0,
    items: [
      {
        itemId: "itm-cp-20",
        name: "Finished Copper Wire 20 SWG",
        unit: "kg",
        qty: 30,
        price: 2680,
        basePrice: 2680,
        labourCharge: 0,
        cost: 2550,
        unitLabel: "kg",
        discount: 0
      }
    ],
    subtotal: 80400,
    discount: 0,
    total: 80400,
    paymentType: "credit",
    paidAmount: 0,
    paidCash: 0,
    paidBank: 0,
    previousBalance: 45000,
    balanceAfter: 125400,
    description: "Retail copper sale at full rate"
  }
];

const demoExpenses = [
  {
    id: "exp-1",
    number: "E-0001",
    date: new Date().toISOString().slice(0, 10),
    category: "Factory Carriage / Transport",
    amount: 8500,
    description: "Mazda rent for scrap dispatch to Factory A",
    paidVia: "cash"
  },
  {
    id: "exp-2",
    number: "E-0002",
    date: new Date().toISOString().slice(0, 10),
    category: "Electricity Bill",
    amount: 14200,
    description: "Shop electricity bill paid",
    paidVia: "bank"
  }
];

const demoBankAccounts = [
  {
    id: "bnk-1",
    name: "Meezan Bank (Main Business)",
    accountNumber: "02010103456789",
    branch: "Shah Alam Branch",
    balance: 450000
  },
  {
    id: "bnk-2",
    name: "HBL (Factory Processing)",
    accountNumber: "14127900123456",
    branch: "Badami Bagh",
    balance: 280000
  }
];

const demoEmployees = [
  {
    id: "emp-1",
    name: "Muhammad Aslam",
    role: "Master Wire Operator",
    phone: "0300-1122334",
    salary: 45000
  },
  {
    id: "emp-2",
    name: "Tariq Mahmood",
    role: "Scrap Sorting & Weighing",
    phone: "0345-2233445",
    salary: 32000
  }
];

const demoFactoryProcessing = [
  {
    id: "fp-1",
    type: "dispatch",
    date: new Date().toISOString().slice(0, 10),
    factoryId: "pty-f1",
    factoryName: "Ittehad Copper Mills (Factory A)",
    challanNo: "CH-801",
    scrapType: "Heavy Copper Scrap (Chheelar)",
    scrapQty: 500,
    notes: "500kg scrap sent for 18 SWG wire processing"
  },
  {
    id: "fp-2",
    type: "inward",
    date: new Date().toISOString().slice(0, 10),
    factoryId: "pty-f1",
    factoryName: "Ittehad Copper Mills (Factory A)",
    challanNo: "CH-801-IN",
    dispatchRefId: "fp-1",
    itemId: "itm-cp-18",
    itemReceivedName: "Finished Copper Wire 18 SWG",
    gauge: "18 SWG",
    scrapConsumed: 500,
    finishedQty: 485,
    processLoss: 15,
    processLossPercent: 3.0,
    processingRatePerKg: 50,
    processingCharges: 24250,
    otherExpenses: 1200,
    totalProcessingCost: 25450,
    effectiveUnitCost: 2552.47,
    notes: "Received 485kg finished wire with 15kg (3%) process loss"
  }
];

module.exports = {
  demoParties,
  demoItems,
  demoInvoices,
  demoExpenses,
  demoBankAccounts,
  demoEmployees,
  demoFactoryProcessing
};
