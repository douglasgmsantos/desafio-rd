import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  border-bottom: 1px solid #dcd2d2;
`;


export const Logo = styled.img`

`;

export const Menu = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  color: ${p => p.theme.colors.primary};
  list-style-type: none;
  margin-left: ${p => p.theme.spacing.default};
  font-size: ${p => p.theme.fontSizes.default};
  cursor: pointer;

  :focus, :hover{
    font-weight: bold;
  }

`;
