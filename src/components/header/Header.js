import { NavList, Navlink } from './Header.styled';
// import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ backgroundColor: 'gray', padding: '20px' }}>
      <nav>
        <NavList>
          <li>
            <Navlink to={'/'}>Home</Navlink>
          </li>
          <li>
            <Navlink to={'/movies'}>Movies</Navlink>
          </li>
        </NavList>
      </nav>
    </header>
  );
};

export default Header;
