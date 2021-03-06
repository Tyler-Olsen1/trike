function trike(fn, ...args) {
  try {
    var r = fn(...args);
    // if r is Promise-like, resolve it
    if (r && r.then && r.catch) {
      return r
        .then((v) => [null, v])
        .catch((e) => [e]);
    }
    return [null, r];
  } catch(e) {
    return [e];
  }
}

module.exports = trike;
