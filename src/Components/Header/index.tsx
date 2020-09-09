import React, { useState, useCallback } from 'react';

import RD from "../../assets/rd.png";

import {
  Container,
  Logo,
  Menu,
  MenuItem,
  ListMenuIcon
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
  const [activeMenu, setActiveMenu] = useState(false);
  const openMenu = useCallback(() => {
    setActiveMenu(activeMenu ? false : true)
  }, [activeMenu]);


  return (
    <Container>
      <Logo src={RD} />
      <ListMenuIcon onClick={() => openMenu()} size={40} />
      <Menu className={activeMenu ? 'open' : ""}>
        {itens.map((item: IMenu) => (<MenuItem key={item.label}>{item.label}</MenuItem>))}
      </Menu>

    </Container>
  )
}

export default Header;
