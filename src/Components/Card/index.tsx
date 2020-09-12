import React, { useCallback, useState } from 'react';

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
  id: number;
  title: string;
  image: any;
  description: string;
  ds_substring: string;
  btnText: string;
  btnTextAlter: string;
  bg: string;
  action: string;
}

const Card: React.FC<ICard> = ({
  id,
  title,
  image,
  description,
  ds_substring,
  btnText,
  btnTextAlter,
  bg,
  action
}) => {
  const [scrollDownContent, setScrollDownContent] = useState(false)

  const handleAction = useCallback(() => {
    switch (action) {
      case "scroll-down-content":
        setScrollDownContent(scrollDownContent ? false : true)
        break;

      case "show-modal-content":
        break;

      case "change-therme":
        break;

      default:
        alert("Ação não cadastrada");
        break;
    }


  }, [action, scrollDownContent])



  return (
    <Container className="card">
      <Header bg={bg}>
        <Logo src={image} />
        <Title>{title}</Title>
      </Header>
      {!scrollDownContent ?
        (<Description>{ds_substring}</Description>) :
        <Description className="scroll-down">{description}</Description>
      }
      <Footer>
        <BtnAction bg={bg} onClick={() => handleAction()}>
          {scrollDownContent ? btnTextAlter : btnText}
        </BtnAction>
      </Footer>
    </Container>
  );
}

export default Card;
