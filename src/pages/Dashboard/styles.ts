import styled from 'styled-components';

export const Container = styled.div`
  max-width: 120.0rem;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items:center;
  flex-direction: column;
  justify-content:space-between;
  padding: ${p => p.theme.spacing.default};
`;

export const Content = styled.div`
  width: 100%;
`;
