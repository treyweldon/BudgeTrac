const express = require("express");
const router = express.Router();
const monthsCtrl = require("../../controllers/api/months");
const ensureLoggedIn = require("../../config/ensureLoggedIn");


router.get("/", monthsCtrl.allMonths, ensureLoggedIn)

router.post("/new", monthsCtrl.create, ensureLoggedIn);

router.get("/:id", monthsCtrl.getMonth, ensureLoggedIn)


module.exports = router;