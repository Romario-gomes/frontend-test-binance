import React, { useState } from 'react';
import { useSymbols } from '../../contexts/SymbolsContext';
import { Button } from '../Button';
import { Table, Td, Th, Thead, Tr } from './styles';
import { InputContainer } from '../../styles';
import { Content, Main } from './styles';

interface Props {
  onSelect?: () => void;
}

const SymbolList: React.FC<Props> = ({ onSelect }) => {
  const { symbols, selectedSymbols, toggleSymbol } = useSymbols();
  const [search, setSearch] = useState('');
  const [checked, setChecked] = useState<string[]>([]);

  const filteredSymbols = symbols.filter((s) =>
    s.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const handleCheck = (symbol: string) => {
    setChecked((prev) =>
      prev.includes(symbol)
        ? prev.filter((s) => s !== symbol)
        : [...prev, symbol]
    );
    if (selectedSymbols.includes(symbol)) {
      toggleSymbol(symbol);
    }
  };

  const handleAddToList = () => {
    checked.forEach((symbol) => {
      if (!selectedSymbols.includes(symbol)) {
        toggleSymbol(symbol);
      }
    });
    console.log('Entrou');
    if(onSelect) {
      onSelect(); 
    }
  };

  return (
    <Content>
      <InputContainer>
        <input
          type="text"
          placeholder="Pesquisar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputContainer>
      <Main>
        <Table>
          <Thead>
            <Tr>
              <Th>
                <input
                  type="checkbox"
                  checked={
                    filteredSymbols.slice(0, 50).every((s) => checked.includes(s.symbol)) &&
                    filteredSymbols.slice(0, 50).length > 0
                  }
                  onChange={() => {
                    const visibleSymbols = filteredSymbols.slice(0, 50).map((s) => s.symbol);
                    const allChecked = visibleSymbols.every((symbol) => checked.includes(symbol));
                    if (allChecked) {
                      setChecked((prev) => prev.filter((s) => !visibleSymbols.includes(s)));
                    } else {
                      setChecked((prev) => [
                        ...prev,
                        ...visibleSymbols.filter((symbol) => !prev.includes(symbol)),
                      ]);
                    }
                  }}
                />
              </Th>
              <Th>Symbol</Th>
            </Tr>
          </Thead>
          <tbody>
            {filteredSymbols.slice(0, 50).map((s) => (
              <Tr key={s.symbol}>
                <Td >
                  <input
                    type="checkbox"
                    checked={checked.includes(s.symbol)}
                    onChange={() => handleCheck(s.symbol)}

                  />
                </Td>
                <Td >{s.symbol}</Td>
              </Tr>
            ))}

          </tbody>
        </Table>
      </Main>
      <Button
        onClick={handleAddToList}
        disabled={checked.length === 0}
      >
        Adicionar a lista
      </Button>
    </Content>
  );
};

export default SymbolList;