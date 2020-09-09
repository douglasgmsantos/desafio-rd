import styled from 'styled-components';

export const Container = styled.div`
  height: 6.0rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin: ${p => p.theme.spacing.vertical};
`;

export const RightsLegal = styled.div`
  font-size: ${p => p.theme.fontSizes.small};
`;

export const Companies = styled.div`
  img {
    margin: ${p => p.theme.spacing.horizontal};
  }
`;

export const Logo = styled.img`
`;
