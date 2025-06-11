import React, { useState, useEffect, useRef } from 'react';
import { useSymbols } from '../../contexts/SymbolsContext';
import { Table, Td, Th, Thead, Tr } from './styles';
import { Header, InputContainer, Select } from '../../styles';
import { Button } from '../Button';
import { CirclePlus } from 'lucide-react';
import { Container } from './styles';

const WatchList: React.FC = () => {
    const { selectedSymbols, updates } = useSymbols();
    const [lists, setLists] = useState<string[]>(['Lista A']);
    const [selectedList, setSelectedList] = useState('Lista A');
    const [symbolsByList, setSymbolsByList] = useState<Record<string, string[]>>({
        'Lista A': [],
    });

    const prevSelectedSymbols = useRef<string[]>([]);

    useEffect(() => {
        const prev = prevSelectedSymbols.current;
        const added = selectedSymbols.filter(s => !prev.includes(s));
        const removed = prev.filter(s => !selectedSymbols.includes(s));

        setSymbolsByList(prevLists => {
            let updated = { ...prevLists };
            if (added.length > 0) {
                updated[selectedList] = [
                    ...prevLists[selectedList],
                    ...added.filter(s => !prevLists[selectedList].includes(s)),
                ];
            }
            if (removed.length > 0) {
                updated[selectedList] = prevLists[selectedList].filter(s => !removed.includes(s));
            }
            return updated;
        });

        prevSelectedSymbols.current = selectedSymbols;
    }, [selectedSymbols, selectedList]);

    const handleAddList = () => {
        const nextChar = String.fromCharCode(65 + lists.length);
        const newList = `Lista ${nextChar}`;
        setLists([...lists, newList]);
        setSelectedList(newList);
        setSymbolsByList((prev) => ({
            ...prev,
            [newList]: [],
        }));
    };

    return (
        <Container>
            <Header>
                <InputContainer>
                    <Select
                        value={selectedList}
                        onChange={e => setSelectedList(e.target.value)}
                    >
                        {lists.map(list => (
                            <option key={list} value={list}>{list}</option>
                        ))}
                    </Select>
                </InputContainer>
                    <Button
                        onClick={handleAddList}
                    >
                        <CirclePlus color='#FFF' size={22} />
                    </Button>
            </Header>
            <Table>
                <Thead>
                    <tr>
                        <Th>Symbol</Th>
                        <Th>Last Price</Th>
                        <Th>Best Price</Th>
                        <Th>Ask Price</Th>
                        <Th>Price Change</Th>
                    </tr>
                </Thead>
                <tbody>
                    {(symbolsByList[selectedList] || []).map((symbol) => {
                        const update = updates[symbol];
                        return (
                            <Tr key={symbol}>
                                <Td data-title="Symbol" >{symbol}</Td>
                                <Td data-title="Last Price">{update?.c || '-'}</Td>
                                <Td data-title="Best Price">{update?.b || '-'}</Td>
                                <Td data-title="Ask Price">{update?.a || '-'}</Td>
                                <Td data-title="Change(%)">
                                    <span>
                                        {update?.P || '-'}%
                                    </span>
                                </Td>
                            </Tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
};

export default WatchList;