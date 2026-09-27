const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    designation: { type: String, default: "Staff" },
    phone: { type: String, default: "" },
    monthlySalary: { type: Number, default: 0 },
    joinDate: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", EmployeeSchema);
