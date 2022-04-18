import styled from "styled-components";
import { RiSunFill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { mobile } from "../responsive";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countriesResult, darkTheme, lightTheme } from "../Redux/flagSlice";
const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: ${(props) => props.theme.element};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const Logo = styled.h1`
  font-size: 2rem;
  ${mobile({
    fontSize: "1.1rem",
  })}
`;
const ToggleContainer = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & > svg {
    font-size: 2rem;
    margin-right: 5px;
  }
  ${mobile({
    fontSize: "1rem",
    "& > svg": {
      fontSize: "1.2rem",
    },
  })}
`;

export const Navbar = (props) => {
  const { selectedTheme } = useSelector(countriesResult);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    selectedTheme === "light" ? dispatch(darkTheme()) : dispatch(lightTheme());
  };
  return (
    <Container>
      <Logo> Where in the world ?</Logo>
      <ToggleContainer onClick={() => toggleTheme()}>
        {selectedTheme === "light" ? (
          <>
            <RiSunFill /> light Mode{" "}
          </>
        ) : (
          <>
            <MdDarkMode /> dark Mode
          </>
        )}
      </ToggleContainer>
    </Container>
  );
};
