import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
display: flex;
list-style: none;
text-decoration: none;
gap: 20px;
`

export const Navlink = styled(NavLink)`
text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color: white;
  &.active {
    color: blue;
    border-bottom: 1px solid blue;
  }
  &:hover,
  &:focus {
    color: blue;
  }
`