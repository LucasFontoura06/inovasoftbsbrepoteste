import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: rgb(15, 23, 42);
    color: #f5f5f5;
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    letter-spacing: -0.02em;
  }
`;
