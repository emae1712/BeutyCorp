import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, PageHeader } from 'antd';
import 'antd/dist/antd.css';

const Header = () => (
  <header className="header__container">
    <div>
      <Button type="link">BeautyCorp</Button>
      <ShoppingCartOutlined />
    </div>
    <PageHeader>
      <NavLink exact activeClassName="activeRoute" activeStyle={{ color: 'teal' }} to="/lbel">
        <Button key="3">Lbel</Button>
      </NavLink>
      <NavLink to="/esika">
        <Button key="2">Esika</Button>
      </NavLink>
      <NavLink to="/cyzone">
        <Button key="1">Cyzone</Button>
      </NavLink>
    </PageHeader>
  </header>
);
export default Header;
