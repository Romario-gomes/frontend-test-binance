import '@testing-library/jest-dom';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        symbols: [
          { symbol: 'BTCUSDT' },
          { symbol: 'ETHUSDT' },
        ],
      }),
  })
) as jest.Mock;