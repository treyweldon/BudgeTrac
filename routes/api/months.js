const express = require("express");
const router = express.Router();
const monthsCtrl = require("../../controllers/api/months");
const ensureLoggedIn = require("../../config/ensureLoggedIn");


router.get("/", monthsCtrl.allMonths, ensureLoggedIn)

router.post("/new", monthsCtrl.create, ensureLoggedIn);

// router.get("/:id", monthsCtrl.getMonth, ensureLoggedIn);

router.post("/createIncome", monthsCtrl.createIncome, ensureLoggedIn)

router.post("/createExpense", monthsCtrl.createExpense, ensureLoggedIn)

router.get("/incomeData", monthsCtrl.getCurrentIncome, ensureLoggedIn)

router.get("/expensesData", monthsCtrl.getCurrentExpenses, ensureLoggedIn)


module.exports = router;