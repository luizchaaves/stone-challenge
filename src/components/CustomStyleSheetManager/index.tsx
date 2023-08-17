import { PropsWithChildren } from 'react';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

const CustomStyleSheetManager = ({ children }: PropsWithChildren) => {
  const shouldForwardProp = (prop: string) => isPropValid(prop);

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      {children}
    </StyleSheetManager>
  );
};

export default CustomStyleSheetManager;
