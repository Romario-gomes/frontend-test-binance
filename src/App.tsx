import React, { useState } from 'react';
import './App.css';
import SymbolList from './components/SymbolList';
import WatchList from './components/WatchList';
import { Menu } from 'lucide-react';
import { SideMenu } from './components/SideMenu';
import { Container } from './components/Container';
import { Main } from './components/Main';
import { MenuButton } from './components/MenuButton';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <MenuButton data-testid="menu-button" onClick={() => setMenuOpen(prev => !prev)}>
        <Menu size={24} />
      </MenuButton>

      <SideMenu  className={menuOpen ? 'open' : ''}>
        <SymbolList onSelect={() => setMenuOpen(false)} />
      </SideMenu>
      <Main>
        <WatchList />
      </Main>
    </Container>
  );
}

export default App;
