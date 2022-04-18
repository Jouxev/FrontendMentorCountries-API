import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { tablet } from "../responsive";
import { filtring, filtringState, notFiltring } from "../Redux/filterSlice";
import { countriesResult } from "../Redux/flagSlice";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  ${tablet({
    flexDirection: "column",
    alignItems: "flex-start",
  })}
`;

const InputFilter = styled.div`
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.element};
  color: ${(props) => props.theme.fontColor};
  display: flex;
  border-radius: 5px;
  justify-content: flex-start;
  align-items: center;
  & svg {
    font-size: 24px;
    margin: 0px 3px;
  }
  ${tablet({
    width: "100%",
    margin: "20px 0px",
    padding: "10px 0px",
  })}
`;
const Input = styled.input`
  border: none;
  padding: 15px 40px;
  width: 180px;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  background: ${(props) => props.theme.element};
  color: ${(props) => props.theme.fontColor};
  ${tablet({
    fontSize: "20px",
  })}
`;

const DropdownFilter = styled.div`
  background: ${(props) => props.theme.element};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 5px;
  ${tablet({
    padding: "10px",
    width: "60%",
  })}
`;
const SelectFilter = styled.select`
  padding: 15px 40px;
  width: auto;
  font-size: 16px;
  border: none;
  background: ${(props) => props.theme.element};
  color: ${(props) => props.theme.fontColor};

  cursor: pointer;
  ${tablet({
    width: "100%",
    fontSize: "14px",
  })}
`;
const Option = styled.option`
  border: none;
  color: ${(props) => props.theme.fontColor};
`;

export const SearchFilter = () => {
  const { isFilter } = useSelector(filtringState);
  const { countries, status } = useSelector(countriesResult);

  const dispatch = useDispatch();

  const filterMeByRegion = (region) => {
    const filtredCountries = countries.filter((x) => x.region === region);
    console.log(filtredCountries);
    dispatch(filtring(filtredCountries));
  };

  const filterMeByName = (name) => {
    const filtredCountries = countries.filter((x) =>
      x.name.common.toLowerCase().includes(name.toLowerCase())
    );
    dispatch(filtring(filtredCountries));
  };
  const filterByRegion = (e) => {
    e.target.value === "all"
      ? dispatch(notFiltring())
      : filterMeByRegion(e.target.value);
  };
  const filterByName = (name) => {
    name === "" ? dispatch(notFiltring()) : filterMeByName(name);
  };
  return (
    <Container>
      <InputFilter>
        <FiSearch />
        <Input
          placeholder="Search for a country..."
          onChange={(e) => filterByName(e.target.value)}
        />
      </InputFilter>
      <DropdownFilter>
        <SelectFilter onChange={(e) => filterByRegion(e)}>
          <Option value="all" defaultValue={true}>
            Filter by Region
          </Option>
          <Option value="Africa"> Africa </Option>
          <Option value="Americas"> America </Option>
          <Option value="Asia"> Asia </Option>
          <Option value="Europe"> Europe </Option>
          <Option value="Oceania"> Oceania </Option>
        </SelectFilter>
      </DropdownFilter>
    </Container>
  );
};
