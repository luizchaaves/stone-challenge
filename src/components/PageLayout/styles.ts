import styled from 'styled-components';

type BackgroundProps = {
  imageurl: string;
};

export const Container = styled.div`
  position: relative;
  padding: 64px;
  min-height: 100dvh;

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    padding: 48px 16px;
  }
`;

export const Background = styled.div<BackgroundProps>`
  background-image: url(${(props) => props.imageurl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100%;
  z-index: -1;

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    background-image: none;
  }
`;
