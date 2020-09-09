import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content:center;
  margin: ${p => p.theme.spacing.huge} 0px;

  .card:first-child{
    margin-right: 1.6rem;
  }

  .card:last-child{
    margin-left: 1.6rem;
  }


  @media (max-width: 865px){
    flex-direction: column;
    margin: 1.6rem 0;

    div + div {
      margin: 1.6rem 0 0;
    }

    .card:first-child, .card:last-child{
      margin-right: 0px;
      margin-left: 0px;
    }

  }
`;
