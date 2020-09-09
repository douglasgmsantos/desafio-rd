import React from 'react';

import {
  Container,
  Header,
  Logo,
  Title,
  Description,
  Footer,
  BtnAction

} from './styles';


interface ICard {
  title: string;
  image: any;
  description: string;
  btnText: string;
  bg: string;
}

const Card: React.FC<ICard> = ({
  title,
  image,
  description,
  btnText,
  bg
}) => {
  return (
    <Container className="card">
      <Header bg={bg}>
        <Logo src={image} />
        <Title>{title}</Title>
      </Header>
      <Description>{description}</Description>
      <Footer>
        <BtnAction bg={bg}>
          {btnText}
        </BtnAction>
      </Footer>
    </Container>
  );
}

export default Card;
