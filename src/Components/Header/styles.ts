import styled from 'styled-components';
import { FiAlignJustify } from "react-icons/fi";

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
  @media (max-width: 600px){
    display: none;
    &.open{
      display: flex;
      flex-direction: column;
      align-items:center;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      justify-content: center;
      background: rgba(255, 255, 255, 0.8)
    }
  }


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

export const ListMenuIcon = styled(FiAlignJustify)`
  cursor: pointer;
  z-index: 2;

  @media (min-width: 600px){
    display: none;
  }


`;
