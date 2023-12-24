import { useState } from "react";
import styled from "styled-components";

// const NumberSelector = () => {
const NumberSelector = ({selectNumber, SetSelectNumber, error, setError}) => {
    const arrNumber = [1,2,3,4,5,6];
    // const [ selectNumber, SetSelectNumber ] = useState();    
    const numberSelectorHandler = (item) => {
      SetSelectNumber(item);
      setError("");
    }
    return (
      <NumberSelectorContainer>
          <p className="error">{error}</p>
          <div className="flex">
          { arrNumber.map(item => 
          <Box isSelected= { item === selectNumber} 
          onClick={() => numberSelectorHandler(item)}>{item}</Box>) }
          </div>
          <p>Select Number</p>
      </NumberSelectorContainer>
    )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex {
      display: flex;
      gap: 24px;
    }
    .error {
      color: red;
    }
    p {
      font-size: 24px;
      font-weight: 700;
    }
`;

const Box = styled.div`
    width: 70px;
    height: 70px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white" )};
    color: ${(props) => (!props.isSelected ? "black" : "white" )};
`;