import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: #0a0a0a;
    color: #f5f5f5;
    line-height: 1.6;
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
