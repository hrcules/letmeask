import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --black: ${(props) => props.theme.colors.textPrimary};
    --background: ${(props) => props.theme.colors.primary};
    --details: ${(props) => props.theme.colors.secudary};
    --gray-dark: ${(props) => props.theme.colors.textSecundary};
    --highlighted: ${(props) => props.theme.colors.highlighted};
    --answered: ${(props) => props.theme.colors.answered};
    --shadow: ${(props) => props.theme.colors.shadow};
  }

  @media (min-width: 1080px) {
    html {
      font-size: 75.75%;
    }
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--black);
  }

  body, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;
  }
`;
