import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader/>
      </header>

      <div className="App-container">
        <div className="App-box">
        <BurgerIngredients />
        </div>
        <div className="App-box">
        <BurgerConstructor/>
        </div>
      </div>
    </div>
  );
}

export default App;
