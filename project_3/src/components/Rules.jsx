import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
        <h1>How to Play Dice Game</h1>
        <div className="text">
            <p>Select any Number</p>
            <p>Click on dice image</p>
            <p>After click on dice if selected number is equal to dice number you will get same point as dice{" "}</p>
        </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
    max-width: 800px;
    margin : 0 auto;
    margin-top: 5px;
    background-color: #fbf1f1;
    border-radius: 10px;
    padding: 20px;
    h2 {
        font-size: 24px;
        font-weight: bold;
    }

    .text {
        margin-top: 24px;
    }
`;