const { Router } = require('express');
const recipes = require ("./recipes")
const diet = require ("./diet")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", recipes);
router.use("/diet", diet);

module.exports = router;
