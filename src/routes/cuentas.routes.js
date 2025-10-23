const express = require('express');
const router = express.Router();
const cuentasController = require('../controllers/cuentas.controller');

// GET /cuentas  -> lista general o búsqueda por queryParam
router.get('/', cuentasController.getCuentas);

// GET /cuenta/:id  -> obtiene una cuenta por su _id
router.get('/cuenta/:id', cuentasController.getCuentaById);

// GET /cuentasBalance -> suma balances de cuentas activas
router.get('/cuentasBalance', cuentasController.getCuentasBalance);

module.exports = router;