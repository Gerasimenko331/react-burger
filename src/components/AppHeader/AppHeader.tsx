import React from 'react';
import './AppHeader.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <div className="AppHeader">
      <BurgerIcon type="primary" />
      <p className="text text_type_main-default text_color_inactive">
    Конструктор
    </p>
      <ListIcon type="primary" />
      <p className="text text_type_main-default text_color_inactive">
    Лента заказов
    </p>
      <Logo/>
      <ProfileIcon type="primary" />
      <p className="text text_type_main-default text_color_inactive">
    Личный кабинет
    </p>
    </div>
  );
}

export default AppHeader;
