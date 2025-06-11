import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SymbolList from '.';

jest.mock('../../contexts/SymbolsContext', () => ({
  useSymbols: () => ({
    symbols: [
      { symbol: 'AAPL' },
      { symbol: 'GOOG' },
      { symbol: 'MSFT' },
      { symbol: 'TSLA' },
    ],
    selectedSymbols: ['AAPL'],
    toggleSymbol: jest.fn(),
  }),
}));

describe('SymbolList', () => {
  test('renderiza e filtra símbolos', () => {
    render(<SymbolList />);

    const input = screen.getByPlaceholderText(/Pesquisar/i);
    expect(input).toBeInTheDocument();

    expect(screen.getByText('AAPL')).toBeInTheDocument();
    expect(screen.getByText('GOOG')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'GO' } });

    expect(screen.queryByText('AAPL')).toBeNull();
    expect(screen.getByText('GOOG')).toBeInTheDocument();
  });

  test('seleciona e desmarca checkboxes', () => {
    render(<SymbolList />);

    const firstCheckbox = screen.getAllByRole('checkbox')[1]; 
    expect(firstCheckbox).not.toBeChecked();

    fireEvent.click(firstCheckbox);
    expect(firstCheckbox).toBeChecked();

    fireEvent.click(firstCheckbox);
    expect(firstCheckbox).not.toBeChecked();
  });

  test('chama onSelect ao clicar no botão', () => {
    const onSelectMock = jest.fn();
    render(<SymbolList onSelect={onSelectMock} />);

    const checkbox = screen.getAllByRole('checkbox')[1];
    fireEvent.click(checkbox);

    const button = screen.getByRole('button', { name: /Adicionar a lista/i });
    expect(button).not.toBeDisabled();

    fireEvent.click(button);
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });
});
