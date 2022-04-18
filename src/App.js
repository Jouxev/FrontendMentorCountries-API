import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Detail } from "./Pages/Detail";
import { Home } from "./Pages/Home";
import { lightMode, darkMode, GlobalStyle } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { countriesResult } from "./Redux/flagSlice";
const Container = styled.div`
  width: 100vw;
`;

function App() {
  const { selectedTheme } = useSelector(countriesResult);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={selectedTheme === "light" ? lightMode : darkMode}>
        <GlobalStyle />
        <Container>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/:name"} element={<Detail />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
