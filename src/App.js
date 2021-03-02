import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { lightTheme } from './theme/theme';
import useHover from './utils/useHover';
import GlobalStyles from './theme/global';
import Cursor from './components/Cursor';
import Badge from './components/Badge';
import Button from './components/Button';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.primary};

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Header = styled.div`
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 1em;

  @media (min-width: 480px) {
    justify-content: space-between;
  }
`;

export default function App() {
  const [hoverRef, isHovered] = useHover();

  return (
    <ThemeProvider theme={lightTheme}>
      <Normalize />
      <GlobalStyles />
      <Page>
        <Header>
          <Badge>
            Magnetic button inspired by{' '}
            <a href="https://cuberto.com/">Cuberto</a> &{' '}
            <a href="https://tympanus.net/Development/MagneticButtons/index.html">
              Codrops
            </a>
          </Badge>
          <Badge>
            More on <a href="https://twitter.com/vinzcelavi/">@twitter</a> &{' '}
            <a href="https://www.instagram.com/vinzcelavi/">@instagram</a>
          </Badge>
        </Header>
        <Button ref={hoverRef} onClick={() => console.log('clicked')}>
          Magnetic button
        </Button>
        <small>Better experience on destkop</small>
      </Page>
      <Cursor hover={isHovered} />
    </ThemeProvider>
  );
}
