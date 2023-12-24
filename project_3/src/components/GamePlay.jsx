import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutLineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [ score, setScore ] = useState(0);
  const [ selectNumber, SetSelectNumber ] = useState();
  const [ currentDice, setCurrentDice ] = useState(1);
  const [ error, setError ] = useState("");
  const [ showRules, setShowRules ] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectNumber) {
      setError("You haven't select any number.");
      return ;
    }

    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);
    
    if (selectNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    SetSelectNumber(undefined);

  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
        <div className="top_section">
        <TotalScore score={score} />  
        <NumberSelector selectNumber={selectNumber} SetSelectNumber={SetSelectNumber} error={error} setError={setError} />      
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice} />
        <div className="btns">
          <OutLineButton onClick={resetScore}>Reset</OutLineButton>
          <Button onClick={() => setShowRules(prev => !prev)}>{showRules ? "Hide" : "Show" } Rules</Button>
        </div>

        { showRules && <Rules />}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 0px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;