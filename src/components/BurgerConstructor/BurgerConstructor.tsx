import React from 'react';
import logo from './logo.svg';
import './BurgerConstructor.css';

function BurgerConstructor() {
  return (
    <div className="BurgerConstructor">
      <header className="BurgerConstructor-header">
        <img src={logo} className="BurgerConstructor-logo" alt="logo" />
        <p>
          Edit <code>src/BurgerConstructor.tsx</code> and save to reload.
        </p>
        <a
          className="BurgerConstructor-link"
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

export default BurgerConstructor;
