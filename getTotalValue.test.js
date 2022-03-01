const { rest } = require('msw');
const { setupServer } = require('msw/node');
const { getCurrencyRate, calculateCurrencyValue } = require('./getTotalValue.js');

const server = setupServer(
  rest.get(`https://rest.coinapi.io/v1/exchangerate/BTC/USD`, (req, res, ctx) => {
    return res(
      ctx.json({ rate: 1000 }),
    )
  }),
  rest.get(`https://rest.coinapi.io/v1/exchangerate/PURP/USD`, (req, res, ctx) => {
    return res(
      ctx.json({error: "You requested specific single item that we don\u0027t have at this moment." }),
    )
  }),
)

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

describe("test getCurrencyRate()", () => {
  it("successfully queries the exchange rate for a crypto currency", async () => {
    const rate = await getCurrencyRate('BTC');
    expect(rate).toBe(1000);
  });

  it("raises error when invalid currency parameter provided", async () => {
    const errorMsg = await getCurrencyRate('PURP');
    expect(errorMsg).toBe("You requested specific single item that we don\u0027t have at this moment.");
  });
});

describe("test calculateCurrencyValue()", () => {
  it("successfully queries the exchange rate for a crypto currency", async () => {
    const value = await calculateCurrencyValue('BTC', 10);
    expect(value).toBe(10000);
  });
});

