import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../Components";
import { countriesResult } from "../Redux/flagSlice";
import { BiArrowBack } from "react-icons/bi";
import { mobile, tablet } from "../responsive";
const Container = styled.div``;

const DetailContainer = styled.div`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  ${tablet({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center;",
  })}
`;

const BackBtn = styled.button`
  margin: 40px 40px 20px 40px;
  padding: 10px 25px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.fontColor};
  font-size: 16px;
  font-weight: 700;
  background: ${(props) => props.theme.element};
  cursor: pointer;
  &:hover {
    trasform: scale(1.2);
    opacity: 0.9;
  }
  & > svg {
    margin-right: 10px;
    font-size: 20px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 500px;
  ${tablet({
    width: "90%",
    minWidth: "280px",
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  margin: 0px 20px;
  ${tablet({
    margin: "0",
  })}
`;
const Title = styled.h1``;
const InfoList = styled.ul`
  columns: 2;
  margin: 0;
  padding: 0;
  list-style: none;
  ${mobile({
    columns: "1",
  })}
`;
const InfoItem = styled.li`
  margin: 10px 0px;
`;

const BorderInfoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  & > strong {
    flex-direction: column;
  }
`;
const BorderTitle = styled.div``;

const Borders = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 3;
  margin-left: 40px;
`;
const Border = styled.button`
  margin: 10px;
  padding: 10px 25px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.fontColor};
  font-size: 12px;
  font-weight: 700;
  background: ${(props) => props.theme.element};
  cursor: pointer;
  &:hover {
    trasform: scale(1.2);
    opacity: 0.9;
  }
`;

export const Detail = (props) => {
  const navigate = useNavigate();
  let params = useParams();
  const { countries } = useSelector(countriesResult);
  const [countryInfo, setcountryInfo] = useState("");

  const getNativeName = (nativeName) => {
    // coverting to array
    var result = Object.keys(nativeName).map((key) => [
      Number(key),
      nativeName[key],
    ]);

    return result[0][1]["official"];
  };
  const getCountryDetail = (name) => {
    // decode URI befor send

    var myCountryInfo = countries.filter((x) =>
      x.name.common.toLowerCase().includes(name.toLowerCase())
    );
    myCountryInfo.length > 0 && setcountryInfo(myCountryInfo);
  };
  useEffect(() => {
    getCountryDetail(decodeURI(params.name).toLowerCase());
  }, [params.name]);

  return (
    <Container>
      <Navbar />
      {countryInfo !== "" ? (
        <>
          <BackBtn onClick={() => navigate("/")}>
            <BiArrowBack /> Go Back{" "}
          </BackBtn>
          <DetailContainer>
            <ImageContainer>
              <Image src={countryInfo[0].flags.svg} alt="country" />
            </ImageContainer>
            <InfoContainer>
              <Title> {countryInfo[0].name.common}</Title>
              <InfoList>
                <InfoItem>
                  <strong>Native Name: </strong>{" "}
                  {getNativeName(countryInfo[0].name.nativeName)}{" "}
                </InfoItem>
                <InfoItem>
                  <strong> Population </strong>{" "}
                  {new Intl.NumberFormat().format(countryInfo[0].population)}
                </InfoItem>
                <InfoItem>
                  <strong> Region : </strong> {countryInfo[0].region}
                </InfoItem>
                <InfoItem>
                  <strong> Sub Region : </strong> {countryInfo[0].subregion}
                </InfoItem>
                <InfoItem>
                  <strong> Capital : </strong>{" "}
                  {countryInfo[0].capital !== undefined
                    ? countryInfo[0].capital[0]
                    : "No Info"}
                </InfoItem>
                <InfoItem>
                  <strong> Top Level Domain : </strong> {countryInfo[0].tld[0]}
                </InfoItem>
                <InfoItem>
                  <strong> Currencies : </strong>{" "}
                  {Object.keys(countryInfo[0].currencies)[0]}
                </InfoItem>
                <InfoItem>
                  <strong> Languages : </strong>
                  {Object.keys(countryInfo[0].languages).map(
                    (e) => countryInfo[0].languages[e] + "   "
                  )}
                </InfoItem>
              </InfoList>
              <BorderInfoContainer>
                <BorderTitle>
                  <strong>Border Countries :</strong>
                </BorderTitle>

                <Borders>
                  {countryInfo[0].borders !== undefined
                    ? Object.values(countryInfo[0].borders).map((e) => (
                        <Border
                          key={countryInfo[0]}
                          onClick={() =>
                            navigate(
                              `/${
                                countries.find((x) => x.cca3 === e).name.common
                              }`
                            )
                          }
                        >
                          {countries.find((x) => x.cca3 === e).name.common}
                        </Border>
                      ))
                    : "No Border"}
                </Borders>
              </BorderInfoContainer>
            </InfoContainer>
          </DetailContainer>
        </>
      ) : (
        " No Result go back and try again"
      )}
    </Container>
  );
};
