import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  background: ${(props) => props.theme.element};
  width: 280px;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    border: 1px solid ${(props) => props.theme.fontColor};
  }
  & > a {
    color: inherit;
    text-decoration: none;
  }
`;
const Image = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  padding: 10px 20px;
`;

const Title = styled.h2``;
const ListDetail = styled.div`
  margin: 10px 0px;
  margin-bottom: 30px;
`;
const Detail = styled.div`
  margin: 5px 0px;
`;
export const Card = (props) => {
  return (
    <Container>
      <Link to={`/${props.item.name.common}`}>
        <Image src={props.item.flags.png} />
        <InfoContainer>
          <Title> {props.item.name.common}</Title>
          <ListDetail>
            <Detail>
              <strong>Population:</strong>{" "}
              {new Intl.NumberFormat().format(props.item.population)}
            </Detail>
            <Detail>
              <strong>Region:</strong> {props.item.region}
            </Detail>
            <Detail>
              <strong>Capital:</strong>{" "}
              {Array.isArray(props.item.capital)
                ? props.item.capital[0]
                : "where is capital"}
            </Detail>
          </ListDetail>
        </InfoContainer>
      </Link>
    </Container>
  );
};
