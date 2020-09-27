import React from 'react';


import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import tshirtImage from '../../assets/tshirt.png';
import { Container, Row, Panel, Gallery, Collumn, Section, Description } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Collumn>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Collumn>

        <Collumn>
          <ProductAction />
          <SellerInfo />
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Collumn>

      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro.</p>
      </span>
      <span>
        <p className="title">Garantia do Vendedor</p>
        <p className="description">
          Sem garantia
        </p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu massa nec tortor tempor pharetra sit amet vel velit. Nunc in tristique nisl. In quis tincidunt est. Donec efficitur facilisis nibh id luctus. Sed at rhoncus elit. Vestibulum eu sollicitudin mauris. In interdum sed nulla vitae placerat. Vestibulum porta sit amet sapien vitae tempor.
    <br />
      <br />
    Itens inclusos: <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu massa nec tortor tempor pharetra sit amet vel velit. Nunc in tristique nisl. In quis tincidunt est. Donec efficitur facilisis nibh id luctus. Sed at rhoncus elit. Vestibulum eu sollicitudin mauris. In interdum sed nulla vitae placerat. Vestibulum porta sit amet sapien vitae tempor. </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu massa nec tortor tempor pharetra sit amet vel velit. Nunc in tristique nisl. In quis tincidunt est. Donec efficitur facilisis nibh id luctus. Sed at rhoncus elit. Vestibulum eu sollicitudin mauris. In interdum sed nulla vitae placerat. Vestibulum porta sit amet sapien vitae tempor. </p>
  </Description>
);

export default Product;
