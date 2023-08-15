import { PropsWithChildren } from 'react';
import BackgroundImage from '../../assets/mask.png';

import { Container, Background } from './styles';

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Background imageurl={BackgroundImage} />
      {children}
    </Container>
  );
};

export default PageLayout;
