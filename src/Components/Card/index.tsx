import React, { useCallback, useState } from 'react';
import ModalMessage from '../ModalMessage';
import { useTheme } from '../../hooks/theme';

import {
  Container,
  Header,
  Logo,
  Title,
  Description,
  Footer,
  BtnAction,
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
  const { toggleTheme } = useTheme();
  const [scrollDownContent, setScrollDownContent] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  function toggleScroll(): void {
    setScrollDownContent(scrollDownContent ? false : true)
  }

  const changeTheme = useCallback(() => toggleTheme(), [toggleTheme]);
  const toggleModal = useCallback(() => setOpenModal(openModal ? false : true), [openModal]);

  const handleAction = useCallback(() => {
    switch (action) {
      case "scroll-down-content":
        toggleScroll();
        break;

      case "show-modal-content":
        toggleModal();
        break;

      case "change-therme":
        changeTheme();
        break;

      default:
        alert("Ação não cadastrada");
        break;
    }

  }, [action, changeTheme, toggleModal, toggleScroll]);

  return (
    <>
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
      <ModalMessage
        isOpen={openModal}
        setIsOpen={toggleModal}
        id={id}
        title={title}
        image={image}
        description={description}
        ds_substring={ds_substring}
        bg={bg}
      />
    </>
  );
}

export default Card;
