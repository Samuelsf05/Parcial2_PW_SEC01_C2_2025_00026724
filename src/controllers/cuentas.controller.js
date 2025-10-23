const path = require('path');
const fs = require('fs');
const { filterByQueryOrField } = require('../utils/findUtils');

const cuentasPath = path.join(__dirname, '../data/cuentas.json');

function loadCuentas() {
  const raw = fs.readFileSync(cuentasPath, 'utf8');
  return JSON.parse(raw);
}

// GET /cuentas  (lista completa o con queryParam)
exports.getCuentas = (req, res) => {
  const cuentas = loadCuentas();
  const queryParam = req.query.queryParam;

  if (!queryParam) {
    return res.json({
      count: cuentas.length,
      data: cuentas
    });
  }

  const result = filterByQueryOrField(cuentas, queryParam);

  if (result.length === 0) {
    return res.json({ finded: false, data: [] });
  } else if (result.length === 1) {
    return res.json({ finded: true, account: result[0] });
  } else {
    return res.json({ finded: true, data: result });
  }
};

// GET /cuenta/:id
exports.getCuentaById = (req, res) => {
  const cuentas = loadCuentas();
  const id = req.params.id;

  const account = cuentas.find(c => String(c._id) === String(id));

  if (account) {
    return res.json({ finded: true, account });
  } else {
    return res.json({ finded: false, account: null });
  }
};

// GET /cuentasBalance
exports.getCuentasBalance = (req, res) => {
  const cuentas = loadCuentas();

  const activeAccounts = cuentas.filter(c => c.isActive === true);

  if (activeAccounts.length === 0) {
    return res.json({ status: false, accountBalance: 0 });
  }

  // Sumar balances eliminando el símbolo $
  const accountBalance = activeAccounts.reduce((acc, cur) => {
    const b = Number(String(cur.balance).replace(/[^0-9.-]+/g, '')) || 0;
    return acc + b;
  }, 0);

  return res.json({ status: true, accountBalance });
};