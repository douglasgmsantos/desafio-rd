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
`;
