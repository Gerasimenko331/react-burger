import React from 'react';
import './BurgerIngredients.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients() {
  const [current, setCurrent] = React.useState('one')
  return (
    <div className="BurgerIngredients">
      <p className="text text_type_main-large pt-10 pb-5">
        Соберите бургер
      </p>
      <div style={{ display: 'flex'}}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
    <p className="text text_type_main-medium pt-10 pb-6">
        Булки
      </p>
    </div>
  );
}

export default BurgerIngredients;
