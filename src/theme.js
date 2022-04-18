import { createGlobalStyle } from "styled-components";

export const darkMode = {
  backgroundColor: "hsl(207, 26%, 17%)",
  fontColor: "#ffffff",
  element: "hsl(209, 23%, 22%)",
  input: "hsl(209, 23%, 22%)",
  boxShadow: "1px 7px 8px -1px rgba(17,21,23,0.4)",
};

export const lightMode = {
  backgroundColor: "hsl(0, 0%, 98%)",
  fontColor: "#111517",
  element: "hsl(0, 0%, 100%)",
  input: "hsl(0, 0%, 52%)",
  boxShadow: "1px 7px 8px -1px rgba(133,133,133,0.4)",
};

export const GlobalStyle = createGlobalStyle`
body{
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.fontColor}
}

`;
