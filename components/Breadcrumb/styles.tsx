import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';
import { AppTheme } from '../../styles/types';

const NewLink: React.FC<LinkProps & {
  className?: string
}> = ({ as, children, href, className }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export const StyledLink = styled(NewLink) <{ theme: AppTheme }>`
  color: ${({ theme }) => theme.textColor};
  opacity: 0.8;
  transition: 0.3s;
  padding-right: 10px;
  padding-left: 10px;
  text-decoration: none;

  &:hover {
      opacity: 0.45;
  }

  &:first-child {
    padding-left: 5px;
  }
`;

export const NoActionLabel = styled.span`
  color: ${({theme}) => theme.textColor};
  opacity: 0.45;
  padding-right: 10px;
  padding-left: 10px;
`