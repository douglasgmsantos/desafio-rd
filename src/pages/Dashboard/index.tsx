import React from 'react';
import Header from '../../Components/Header';
import Cards from '../../Components/Cards';
import Footer from '../../Components/Footer';

import {
  Container,
  Content
} from './styles';


const Dashboard: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header />
        <Cards />
      </Content>
      <Footer />
    </Container>
  )
}

export default Dashboard;
