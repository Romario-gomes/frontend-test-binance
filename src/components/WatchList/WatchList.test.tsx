import React from 'react';
import { render, screen } from '@testing-library/react';
import WatchList from '.';

const mockSymbolsContext = {
  selectedSymbols: ['BTCUSDT'],
  updates: {
    BTCUSDT: {
      c: '27000',
      b: '26900',
      a: '27100',
      P: '1.2',
    },
  },
};

jest.mock('../../contexts/SymbolsContext', () => ({
  useSymbols: () => mockSymbolsContext,
}));

describe('<WatchList />', () => {
  it('Should show data', () => {
    render(<WatchList />);

    expect(screen.getByText('BTCUSDT')).toBeInTheDocument();
    expect(screen.getByText('27000')).toBeInTheDocument();
    expect(screen.getByText('26900')).toBeInTheDocument();
    expect(screen.getByText('27100')).toBeInTheDocument();
    expect(screen.getByText('1.2%')).toBeInTheDocument();
  });
});
