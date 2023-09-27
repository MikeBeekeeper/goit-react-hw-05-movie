import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ListItem = styled.li`
  font-size: 20px;
  margin-bottom: 8px;
  text-decoration: none;
  font-color: white;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  list-style: none;
  text-decoration: none;
  gap: 10px;
`;

export const MovieLink = styled(Link)`
  color: black;
  opacity: 0.7;
  font-size: 20px;
  text-decoration: none;
  &:hover,
  &:focus {
    opacity: 1;
    text-decoration: underline dotted;
  }
`;
