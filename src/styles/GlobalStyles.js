import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-Regular.ttf') ;
    font-weight: normal;
    font-style: normal;
  }

  html, body {
    scroll-behavior: smooth;
  }

  body {
    background: ${props => props.theme.purple};
    font-family: 'Lato', Helvetica, Arial, sans-serif;
    color: ${props => props.theme.mint};
  }

  a {
    text-decoration: none;
  }

  .container {
    margin: 0 auto;
    max-width: 1280px;
    width: 70%;

    @media screen and (max-width: 960px) {
        width: 90%;
    }
  }
`;

export default GlobalStyle;
