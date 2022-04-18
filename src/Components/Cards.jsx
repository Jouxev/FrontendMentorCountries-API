import styled from "styled-components";
import { TailSpin } from "react-loader-spinner";
import { useEffect } from "react";
import { countriesResult, getCountry } from "../Redux/flagSlice";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "./Card";
import { filtringState } from "../Redux/filterSlice";
const Container = styled.div`
  margin: 20px 0px;
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Cards = () => {
  const dispatch = useDispatch();
  const { countries, status } = useSelector(countriesResult);
  const { isFilter, filterResult } = useSelector(filtringState);
  useEffect(() => {
    countries.length <= 0 && dispatch(getCountry());
  }, []);

  return (
    <Container>
      {status === "loading" ? (
        <TailSpin color="#858585" height={80} width={80} />
      ) : isFilter ? (
        filterResult.length > 0 &&
        filterResult.map((item) => <Card item={item} key={item.name.common} />)
      ) : (
        countries.length > 0 &&
        countries.map((item) => <Card item={item} key={item.name.common} />)
      )}
    </Container>
  );
};
