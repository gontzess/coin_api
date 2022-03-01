const { calculateCurrencyValue, getParams } = require('./getTotalValue')

calculateCurrencyValue(...getParams()).then(value => console.log(value))
