const { Router } = require("express");
const router = Router();
const db = require("../db");
// const { getTemperament } = require("../controllers/temperament");

router.get("/", Diets);

module.exports = router;