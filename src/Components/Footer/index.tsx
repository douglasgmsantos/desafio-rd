import React from 'react';

import Drogaraia from '../../assets/drogaraia.png';
import Drogasil from '../../assets/drogasil.png';
import Farmasil from '../../assets/farmasil.png';
import Univers from '../../assets/univers.png';
import Bio from '../../assets/4bio.png';
import RdSmall from '../../assets/rd-small.png';

import {
  Container,
  RightsLegal,
  Companies,
  Logo
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <RightsLegal>RD 2017. Todos os direitos reservados</RightsLegal>
      <Companies>
        <img src={Drogaraia} />
        <img src={Drogasil} />
        <img src={Farmasil} />
        <img src={Univers} />
        <img src={Bio} />
      </Companies>
      <Logo src={RdSmall} />
    </Container>
  )
}

export default Footer;
