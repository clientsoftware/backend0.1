require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");

// Page-by-Page Mongoose Models
const Party = require("./models/Party");
const Item = require("./models/Item");
const Invoice = require("./models/Invoice");
const Expense = require("./models/Expense");
const BankAccount = require("./models/BankAccount");
const Employee = require("./models/Employee");
const User = require("./models/User");
const LedgerData = require("./models/LedgerData");

// Demo Seed Data
const {
  demoParties,
  demoItems,
  demoInvoices,
  demoExpenses,
  demoBankAccounts,
  demoEmployees,
} = require("./demoSeedData");

const app = express();
const PORT = process.env.PORT || 5050;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET || "bahi_khata_jwt_secret_2026";

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Connect to MongoDB Atlas
mongoose
  .connect(MONGODB_URI)
  .then(async () => {
    console.log("✅ MongoDB Atlas Connected Successfully!");
    await seedDefaultUsers();
    await seedPageByPageDemoData();
  })
  .catch((err) => {
    console.error("❌ MongoDB Atlas Connection Error:", err.message);
  });

// Seed Owner User if database is new
async function seedDefaultUsers() {
  try {
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      const defaultOwner = new User({
        username: "admin",
        password: "1234",
        name: "Business Owner",
        role: "owner",
      });
      await defaultOwner.save();
      console.log("👤 Default owner user created (Username: admin, Password: 1234)");
    }
  } catch (err) {
    console.error("Error seeding default user:", err.message);
  }
}

// Seed Demo Data Page by Page in MongoDB Atlas
async function seedPageByPageDemoData() {
  try {
    const partyCount = await Party.countDocuments();
    if (partyCount === 0) {
      await Party.insertMany(demoParties);
      console.log("📦 Seeded Demo Parties into MongoDB Atlas ('parties' collection)");
    }

    const itemCount = await Item.countDocuments();
    if (itemCount === 0) {
      await Item.insertMany(demoItems);
      console.log("📦 Seeded Demo Items into MongoDB Atlas ('items' collection)");
    }

    const invoiceCount = await Invoice.countDocuments();
    if (invoiceCount === 0) {
      await Invoice.insertMany(demoInvoices);
      console.log("📦 Seeded Demo Invoices into MongoDB Atlas ('invoices' collection)");
    }

    const expenseCount = await Expense.countDocuments();
    if (expenseCount === 0) {
      await Expense.insertMany(demoExpenses);
      console.log("📦 Seeded Demo Expenses into MongoDB Atlas ('expenses' collection)");
    }

    const bankCount = await BankAccount.countDocuments();
    if (bankCount === 0) {
      await BankAccount.insertMany(demoBankAccounts);
      console.log("📦 Seeded Demo Bank Accounts into MongoDB Atlas ('bankaccounts' collection)");
    }

    const empCount = await Employee.countDocuments();
    if (empCount === 0) {
      await Employee.insertMany(demoEmployees);
      console.log("📦 Seeded Demo Employees into MongoDB Atlas ('employees' collection)");
    }
  } catch (err) {
    console.error("Error seeding page-by-page demo data:", err.message);
  }
}

// Seed / Reset Electrical Shop Demo Data
app.post("/api/seed-electrical-demo", async (req, res) => {
  try {
    await Party.deleteMany({});
    await Party.insertMany(demoParties);

    await Item.deleteMany({});
    await Item.insertMany(demoItems);

    await Invoice.deleteMany({});
    await Invoice.insertMany(demoInvoices);

    await Expense.deleteMany({});
    await Expense.insertMany(demoExpenses);

    await BankAccount.deleteMany({});
    await BankAccount.insertMany(demoBankAccounts);

    await Employee.deleteMany({});
    await Employee.insertMany(demoEmployees);

    res.json({ message: "Electric Shop & Copper Scrap Demo Data loaded into MongoDB Atlas!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to seed electrical demo data" });
  }
});

// API Health Check
app.get("/api/health", (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;
  res.json({ status: "ok", dbConnected: isConnected });
});

// Authentication Routes
app.post("/api/auth/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "Username and password are required." });
    }

    const user = await User.findOne({ username: username.toLowerCase().trim() });
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password." });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid username or password." });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: { id: user._id, username: user.username, name: user.name, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ error: "Server error during login." });
  }
});

// -------------------------------------------------------------
// Page-by-Page MongoDB Atlas Endpoints
// -------------------------------------------------------------

// Page: Parties
app.get("/api/parties", async (req, res) => {
  try {
    const parties = await Party.find();
    res.json(parties);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch parties" });
  }
});

app.post("/api/parties", async (req, res) => {
  try {
    const parties = req.body;
    await Party.deleteMany({});
    if (Array.isArray(parties) && parties.length > 0) {
      await Party.insertMany(parties);
    }
    res.json({ message: "Parties saved page by page to MongoDB Atlas" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save parties" });
  }
});

// Page: Items / Inventory
app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

app.post("/api/items", async (req, res) => {
  try {
    const items = req.body;
    await Item.deleteMany({});
    if (Array.isArray(items) && items.length > 0) {
      await Item.insertMany(items);
    }
    res.json({ message: "Items saved page by page to MongoDB Atlas" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save items" });
  }
});

// Page: Invoices (Sales, Purchases, Returns)
app.get("/api/invoices", async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch invoices" });
  }
});

app.post("/api/invoices", async (req, res) => {
  try {
    const invoices = req.body;
    await Invoice.deleteMany({});
    if (Array.isArray(invoices) && invoices.length > 0) {
      await Invoice.insertMany(invoices);
    }
    res.json({ message: "Invoices saved page by page to MongoDB Atlas" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save invoices" });
  }
});

// Page: Expenses
app.get("/api/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
});

app.post("/api/expenses", async (req, res) => {
  try {
    const expenses = req.body;
    await Expense.deleteMany({});
    if (Array.isArray(expenses) && expenses.length > 0) {
      await Expense.insertMany(expenses);
    }
    res.json({ message: "Expenses saved page by page to MongoDB Atlas" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save expenses" });
  }
});

// Full Combined Data Endpoint (Syncs all pages with MongoDB Atlas)
app.get("/api/data", async (req, res) => {
  try {
    const parties = await Party.find();
    const items = await Item.find();
    const invoices = await Invoice.find();
    const expenses = await Expense.find();
    const bankAccounts = await BankAccount.find();
    const employees = await Employee.find();
    let doc = await LedgerData.findOne({ storeId: "default-store" });

    const result = {
      ...(doc ? doc.toObject() : {}),
      parties,
      items,
      invoices,
      expenses,
      bankAccounts,
      employees,
    };
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch full data" });
  }
});

app.post("/api/data", async (req, res) => {
  try {
    const data = req.body;

    // Save Page-by-Page into dedicated MongoDB Collections
    if (Array.isArray(data.parties)) {
      await Party.deleteMany({});
      if (data.parties.length > 0) await Party.insertMany(data.parties);
    }
    if (Array.isArray(data.items)) {
      await Item.deleteMany({});
      if (data.items.length > 0) await Item.insertMany(data.items);
    }
    if (Array.isArray(data.invoices)) {
      await Invoice.deleteMany({});
      if (data.invoices.length > 0) await Invoice.insertMany(data.invoices);
    }
    if (Array.isArray(data.expenses)) {
      await Expense.deleteMany({});
      if (data.expenses.length > 0) await Expense.insertMany(data.expenses);
    }
    if (Array.isArray(data.bankAccounts)) {
      await BankAccount.deleteMany({});
      if (data.bankAccounts.length > 0) await BankAccount.insertMany(data.bankAccounts);
    }
    if (Array.isArray(data.employees)) {
      await Employee.deleteMany({});
      if (data.employees.length > 0) await Employee.insertMany(data.employees);
    }

    // Save full document snapshot as backup
    let ledgerDoc = await LedgerData.findOne({ storeId: "default-store" });
    if (!ledgerDoc) {
      ledgerDoc = new LedgerData({ storeId: "default-store", ...data });
    } else {
      Object.assign(ledgerDoc, data);
    }
    await ledgerDoc.save();

    res.json({ message: "Page-by-page collections saved to MongoDB Atlas!" });
  } catch (err) {
    console.error("Save error:", err);
    res.status(500).json({ error: "Failed to save data to MongoDB Atlas" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Express Backend Server running on http://localhost:${PORT}`);
});
