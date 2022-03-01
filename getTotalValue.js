const axios = require('axios');
require('dotenv').config();

const BASE_URL = "https://rest.coinapi.io";
const API_KEY = process.env.API_KEY;

const options = {
  headers: {'X-CoinAPI-Key': API_KEY}
};

async function getCurrencyRate(currencyCode) {
  const response = await axios.get(`${BASE_URL}/v1/exchangerate/${currencyCode}/USD`, options);
  if (response.data.error) {
    return response.data.error;
  } else {
    return response.data.rate;
  }
}

async function calculateCurrencyValue(currencyCode, amount) {
  const rate = await getCurrencyRate(currencyCode);
  if (typeof rate === "string") { return console.log(rate) }
  return rate * amount;
}

function getParams() {
  const currencyCode = process.argv[2]
  const amount = process.argv[3]
  return [ currencyCode, amount ]
}

module.exports = { getCurrencyRate, calculateCurrencyValue, getParams }
