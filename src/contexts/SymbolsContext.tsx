import React, { createContext, useContext, useEffect, useState } from 'react';
import { SymbolInfo, TickerUpdate } from '../types';

interface SymbolsContextProps {
  symbols: SymbolInfo[];
  selectedSymbols: string[];
  updates: Record<string, TickerUpdate>;
  toggleSymbol: (symbol: string) => void;
}

const SymbolsContext = createContext<SymbolsContextProps | undefined>(undefined);

export const SymbolsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [symbols, setSymbols] = useState<SymbolInfo[]>([]);
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>([]);
  const [updates, setUpdates] = useState<Record<string, TickerUpdate>>({});

  useEffect(() => {
    fetch('https://api.binance.com/api/v3/exchangeInfo')
      .then(res => res.json())
      .then(data => {
        const filtered = data.symbols.map((s: any) => ({
          symbol: s.symbol,
          baseAsset: s.baseAsset,
          quoteAsset: s.quoteAsset,
        }));
        setSymbols(filtered);
      });
  }, []);

  useEffect(() => {
    if (selectedSymbols.length === 0) return;
    const streams = selectedSymbols.map(s => s.toLowerCase() + '@ticker').join('/');
    const ws = new WebSocket(`wss://stream.binance.com:443/stream?streams=${streams}`);

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.data) {
        const update: TickerUpdate = message.data;
        setUpdates(prev => ({ ...prev, [update.s]: update }));
      }
    };

    return () => ws.close();
  }, [selectedSymbols]);

  const toggleSymbol = (symbol: string) => {
    setSelectedSymbols(prev =>
      prev.includes(symbol)
        ? prev.filter(s => s !== symbol)
        : [...prev, symbol]
    );
  };

  return (
    <SymbolsContext.Provider value={{ symbols, selectedSymbols, updates, toggleSymbol }}>
      {children}
    </SymbolsContext.Provider>
  );
};

export const useSymbols = () => {
  const context = useContext(SymbolsContext);
  if (!context) throw new Error('useSymbols deve ser usado dentro do SymbolsProvider');
  return context;
};
