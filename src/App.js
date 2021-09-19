import React from 'react';
import { MenuBurguer, TopNavBar } from './components';
import { BrowserRouter as Router } from 'react-router-dom'
import { AppProvider, BooksProvider } from './providers';

function App() {
  return (
    <Router>
      <BooksProvider>
        <TopNavBar/>
        <AppProvider/>
        <MenuBurguer className={"menu-hamburguer"}/>
      </BooksProvider>
  </Router>
  );
}

export default App;