import React from 'react';
import theme from '../../styles/theme';

import Desktop from '../../assets/desktop.png';
import Tablet from '../../assets/tablet.png';
import Mobile from '../../assets/mobile.png';

import Card from '../../Components/Card';

import { Container } from './styles';

const cards = [
  {
    id: 1,
    title: "Site Responsivo DESKTOP",
    image: Desktop,
    description: "Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down.",
    btnText: "Leia mais...",
    color: theme.colors.orange,
  },
  {
    id: 2,
    title: "Site Responsivo TABLET",
    image: Tablet,
    description: "Quando pressionado o botão Leia mais... a informação deve aparecer completa em um popup na tela.",
    btnText: "Leia mais...",
    color: theme.colors.yellow,
  },
  {
    id: 3,
    title: "Site Responsivo MOBILE",
    image: Mobile,
    description: "Quando pressionado o botão Alterar tema... modifique o tema do site para blackfriday a se gosto.",
    btnText: "Alterar tema",
    color: theme.colors.purple,
  }
]


const Cards: React.FC = () => {
  return (
    <Container>
      {
        cards.map(card =>
          <Card
            key={card.id}
            title={card.title}
            image={card.image}
            description={card.description}
            btnText={card.btnText}
            bg={card.color}
          />
        )
      }
    </Container>
  )
}

export default Cards;
