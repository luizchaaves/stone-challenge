import { PropsWithChildren } from 'react';
import BackgroundImage from '../../assets/mask.webp';

import { Container, Background } from './styles';
import CustomStyleSheetManager from '../CustomStyleSheetManager';

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <CustomStyleSheetManager>
        <Background imageurl={BackgroundImage} />
      </CustomStyleSheetManager>
      {children}
    </Container>
  );
};

export default PageLayout;
