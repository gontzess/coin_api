**Problem description:**

Build a small program that, given the symbol of a cryptocurrency a person owns and its amount, calculates the total value. To do this, we will need a way to determine what the price of cryptocurrency is.

An external API that can give us a crypto currency price is [CoinAPI](https://www.coinapi.io/).

User should be able to run the code like this:

```
node getTotalValue.js BTC 2
```

If you have time write 2 tests:  
    - Happy path (the program returns a correct value)  
    - The program logs an error message when incorrect data is passed

Additional challenge:  
    - Make the tests work offline
