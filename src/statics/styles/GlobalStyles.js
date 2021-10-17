import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    height: 100vh;
    overscroll-behavior: none;
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    background: transparent;
    border: 0;
    outline: 0;
  }
  ul, li {
    list-style: none;
  }
  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
  }
`;
