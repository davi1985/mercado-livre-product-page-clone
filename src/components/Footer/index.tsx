import React from "react";

import { Container } from "./styles";

const Footer: React.FC = () => {
  const url = 'https://github.com/davi1985';
  return <Container>
    <p>Interface reproduzida com a Rocketseat</p>
    <a href={url} target='_blank' rel="noopener noreferrer"> by Davi Silva</a>
  </Container>;
};

export default Footer;
