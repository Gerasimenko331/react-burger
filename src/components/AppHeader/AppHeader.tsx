import React from 'react';
import './AppHeader.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    
    <div className="AppHeader">
      <div className="container mb-4 mt-4">
         <div className="row">
        <div className="box p-5 mr-1">
          <div className="cell">
            <BurgerIcon type="primary"/>
            <p className="text text_type_main-default text_color_inactive pl-2">
              Конструктор
            </p>
          </div>
        </div>
        <div className="box p-5 ml-1">
          <div className="cell">
            <ListIcon type="primary" />
            <p className="text text_type_main-default text_color_inactive pl-2">
              Лента заказов
            </p>
          </div>
        </div>
        </div>
        <div className="mb-4 mt-4">
          <Logo/>
        </div>
        <div className="box p-5">
          <div className="cell">
            <ProfileIcon type="primary" />
            <p className="text text_type_main-default text_color_inactive pl-2">
              Личный кабинет
            </p>
          </div>
        </div>
       </div>
    </div>
  );
}

export default AppHeader;
