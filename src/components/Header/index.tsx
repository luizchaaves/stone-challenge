import { Container } from './styles';
import Logo from '../Logo';
import Date from '../Date';

const Header = () => {
  return (
    <Container>
      <Logo />
      <Date />
    </Container>
  );
};

export default Header;
