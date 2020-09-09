import styled from 'styled-components';

export const Container = styled.div`
  background: ${p => p.theme.colors.white};
`;

interface IDefaultProps {
  bg: string;
}

export const Header = styled.div<IDefaultProps>`
  background: ${p => p.bg};
  text-align: center;
  padding: ${p => p.theme.spacing.default};
`;

export const Logo = styled.img`

  `;

export const Title = styled.div`
  color: ${ p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.huge};
  padding: ${p => p.theme.spacing.default};
  text-transform: capitalize;
`;

export const Description = styled.div`
  padding: ${p => p.theme.spacing.default};
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
`;
