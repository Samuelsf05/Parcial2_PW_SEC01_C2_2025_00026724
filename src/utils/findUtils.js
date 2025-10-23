function filterByQueryOrField(cuentas, q) {
  const qLower = String(q).toLowerCase();

  return cuentas.filter(c => {
    if (String(c._id).toLowerCase().includes(qLower)) return true;
    if (c.client && String(c.client).toLowerCase().includes(qLower)) return true;
    if (c.gender && String(c.gender).toLowerCase().includes(qLower)) return true;
    return false;
  });
}

module.exports = { filterByQueryOrField };