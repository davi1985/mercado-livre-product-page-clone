import React from "react";

import { Container, SearchIcon, Input } from "./styles";
import logo from '../../assets/logo.png';
import brand from '../../assets/brand.png';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <div className="logo">
          <img src={logo} alt="Logomarca Mercado Livre" />
        </div>
        <div className="input">
          <Input type="text" placeholder="Buscar produtos, marcas e muito mais..." />
          <SearchIcon />
        </div>

        <div className="brand">
          <img src={brand} alt="Logomarca Mercado Livre" />
        </div>

      </header>
    </Container>
  );
};

export default Header;
