import Dropdown from 'react-bootstrap/Dropdown';
import { Container, NavIten, IconButton } from './style';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

function Basic() {

  const {openMenu, setOpenMenu} = useContext(UserContext);
  const navigate = useNavigate();


  return (
    <Container openMenu = {openMenu}>
      <NavIten>
        <IconButton href='#'>
          icovn
        </IconButton>
      </NavIten>
    </Container>
  );
}

export default Basic;

//li className='nav-iten'