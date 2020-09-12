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
    title: "O que é o Lorem Ipsum?",
    image: Desktop,
    description: "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum",
    ds_substring: "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem ...",
    btnText: "Leia mais...",
    btnTextAlter: "Leia menos...",
    color: theme.colors.orange,
    action: "scroll-down-content"
  },
  {
    id: 2,
    title: "Porque é que o usamos?",
    image: Tablet,
    description: "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de Conteúdo aqui, conteúdo aqui, tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por lorem ipsum irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor).",
    ds_substring: "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página ...",
    btnText: "Leia mais...",
    btnTextAlter: "",
    color: theme.colors.yellow,
    action: "show-modal-content"
  },
  {
    id: 3,
    title: "Site Responsivo MOBILE",
    image: Mobile,
    description: "Quando pressionado o botão Alterar tema... modifique o tema do site para blackfriday a se gosto.",
    ds_substring: "Quando pressionado o botão Alterar tema... modifique o tema do site para blackfriday a se gosto.",
    btnText: "Alterar tema",
    btnTextAlter: "",
    color: theme.colors.purple,
    action: "change-therme"
  }
]


const Cards: React.FC = () => {




  return (
    <Container>
      {
        cards.map(card =>
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            image={card.image}
            description={card.description}
            ds_substring={card.ds_substring}
            btnText={card.btnText}
            btnTextAlter={card.btnTextAlter}
            bg={card.color}
            action={card.action}
          />
        )
      }
    </Container>
  )
}

export default Cards;
