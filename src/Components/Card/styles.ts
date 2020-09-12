import styled from 'styled-components';

export const Container = styled.div`
  background: ${p => p.theme.colors.white};
  height: 450px;
  max-height: 450px;
  width: 387px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #FFF;

  @media (max-width: 870px) {
    width: auto;
  }

`;

interface IDefaultProps {
  bg: string;
}

export const Header = styled.div<IDefaultProps>`
  background: ${p => p.bg};
  text-align: center;
  padding: ${p => p.theme.spacing.default};
`;

export const Logo = styled.img``;

export const Title = styled.div`
  color: ${ p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.huge};
  padding: ${p => p.theme.spacing.default};

  @media (max-width: 1118px) {
    font-size: ${p => p.theme.fontSizes.default};
    padding: 1.0rem;
  }


`;

export const Description = styled.div`
  padding: ${p => p.theme.spacing.default};

  @media (max-width: 1140px) {
    font-size: ${p => p.theme.fontSizes.small};
  }

  @media (max-width: 965px) {
    font-size: 1.4rem;
  }

  &.scroll-down{
    padding: 1.6rem;
    width: 100%;
    overflow: auto;
    text-overflow: ellipsis;
    height: 100px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${p => p.theme.spacing.default};
`;

export const BtnAction = styled.button<IDefaultProps>`
  background: ${p => p.bg};
  color: ${p => p.theme.colors.white};
  border: none;
  padding: ${p => p.theme.spacing.default};
  @media (max-width: 885px) {
    width: 100%;
  }
`;
