import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { SymbolsProvider } from './contexts/SymbolsContext';

beforeEach(() => {
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
});

afterAll(() => {
  jest.resetAllMocks();
});

test('integração: seleciona símbolo e adiciona à WatchList, fechando menu', async () => {
  render(
    <SymbolsProvider>
      <App />
    </SymbolsProvider>
  );

  fireEvent.click(screen.getByTestId('menu-button'));

  const btcSymbol = await screen.findByText('BTCUSDT');

  fireEvent.click(btcSymbol);

  await waitFor(() => {
    expect(screen.getByText('BTCUSDT')).toBeInTheDocument();
  });
});
