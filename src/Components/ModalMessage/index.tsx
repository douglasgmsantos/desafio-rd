import React from 'react';
import Modal from '../Modal';

import { Container, Logo, Title, Description, Header, Footer, BtnAction } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  id: number;
  title: string;
  image: any;
  description: string;
  ds_substring: string;
  bg: string;
}

const ModalMessage: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  id,
  title,
  image,
  description,
  ds_substring,
  bg,
}) => {

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container className="card">
        <Header bg={bg}>
          <Logo src={image} />
          <Title>{title}</Title>
        </Header>
        <Description className="scroll-down">{description}</Description>
        <Footer>
          <BtnAction bg={bg} onClick={() => setIsOpen()}>
            Fechar
          </BtnAction>
        </Footer>
      </Container>
    </Modal>
  );
}

export default ModalMessage;
