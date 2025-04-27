import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #00634D;
    --secondary-color: #00A67E;
    --accent-color: #00D4A0;
    --metallic-light: #E8F3F1;
    --metallic-dark: #004D3D;
    --text-color: #FFFFFF;
    --gradient-metallic: linear-gradient(
      135deg,
      var(--accent-color) 0%,
      var(--secondary-color) 50%,
      var(--primary-color) 100%
    );
  }

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
    background: var(--primary-color);
    color: var(--text-color);
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
    background: var(--gradient-metallic);
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    letter-spacing: -0.02em;
    color: var(--text-color);
  }

  .metallic-effect {
    background: var(--gradient-metallic);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .metallic-border {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: 2px;
      background: var(--gradient-metallic);
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }
`;
