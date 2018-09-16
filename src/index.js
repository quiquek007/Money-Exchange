// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let change = {};
  if (currency <= 0) return change;
  if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

  function getDivider(currency, separator) {
    let divider = Math.floor(currency / separator);
    return divider;
  }

  if (getDivider(currency, 50) >= 1) {
    change.H = getDivider(currency, 50);
    currency -= 50 * change.H;
  }

  if (getDivider(currency, 25) >= 1) {
    change.Q = getDivider(currency, 25);
    currency -= 25 * change.Q;
  }

  if (getDivider(currency, 10) >= 1) {
    change.D = getDivider(currency, 10);
    currency -= 10 * change.D;
  }

  if (getDivider(currency, 5) >= 1) {
    change.N = getDivider(currency, 5);
    currency -= 5 * change.N;
  }

  if (currency > 0) change.P = currency;
  return change;
}
