async function getAll() {
  const CoinMarketCap = require('coinmarketcap-api');
  const apiKey = 'ce018e50-0fc5-4000-a09f-fa38bf372e28';
  const client = new CoinMarketCap(apiKey);

  const res = await client.getTickers({ convert: 'EUR' });
  return res;
}

let currencies = [];

currencies.push({ symbol: 'GBH', values: [] });
currencies.push({ symbol: 'BTC', values: [] });

let direction = 0;

setInterval(() => {
  //set new direction
  direction = Math.random() * 8 - 4;
}, 1000);

let origin = 48;
let price = 0;

function tick() {
  let tension = Math.abs(price - origin) + direction;

  if (Math.sign(price - origin) === 1) {
    price -= tension;
  } else {
    price += tension;
  }
  origin += price - origin;

  if (origin < 2){
    origin++
    origin++
  }

  return price
}

async function getTickers() {
  return currencies;
}

setInterval(()=>{
  currencies.forEach((currency) => {
    currency.values.push(tick());
    if (currency.values.length > 50) {
      currency.values.shift();
    }
  });
}, 1000);

module.exports = {
  getAll,
  getTickers,
};
