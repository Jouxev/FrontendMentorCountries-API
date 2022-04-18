import styled from "styled-components";
import { Cards, Navbar, SearchFilter } from "../Components";

const Container = styled.div`
  width: 100%;
`;

export const Home = (props) => {
  return (
    <Container>
      <Navbar />
      <SearchFilter />
      <Cards />
    </Container>
  );
};
