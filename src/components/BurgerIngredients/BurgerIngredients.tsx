import React from 'react';
import logo from './logo.svg';
import './BurgerIngredients.css';

function BurgerIngredients() {
  return (
    <div className="BurgerIngredients">
      <header className="BurgerIngredients-header">
        <img src={logo} className="BurgerIngredients-logo" alt="logo" />
        <p>
          Edit <code>src/BurgerIngredients.tsx</code> and save to reload.
        </p>
        <a
          className="BurgerIngredients-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default BurgerIngredients;
