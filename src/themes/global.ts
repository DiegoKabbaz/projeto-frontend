import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: white;
    font-family: ${props => props.theme['fontFamily']};
  }
    

`;