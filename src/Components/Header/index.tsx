import React from 'react';

import RD from "../../assets/rd.png";

import {
  Container,
  Logo,
  Menu,
  MenuItem
} from './styles';

const itens = [
  { label: "HTML5", link: "" },
  { label: "CSS3", link: "" },
  { label: "JAVASCRIPT", link: "" },
  { label: "REACT", link: "" },
  { label: "REDUX", link: "" }
]

interface IMenu {
  label: string
}

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={RD} />
      <Menu>
        {itens.map((item: IMenu) => (<MenuItem key={item.label}>{item.label}</MenuItem>))}
      </Menu>
    </Container>
  )
}

export default Header;
