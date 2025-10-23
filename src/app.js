const express = require('express');
const cuentasRoutes = require('./routes/cuentas.routes');

const app = express();

app.use(express.json());

// Rutas
app.use('/cuentas', cuentasRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API Cuentas - Parcial II - Puerto 3130' });
});

module.exports = app;