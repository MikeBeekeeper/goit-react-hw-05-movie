import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: flex;
  justify-content: center;
  align_atems: center;
  text-decoration: none;
  width: 70px;
  height: 30px;
  padding: 10px;
  color: blue;
  &:hover,
  &:focus {
    color: black;
  }
`;
