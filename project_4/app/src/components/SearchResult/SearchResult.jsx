import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";
const SearchResult = ({data}) => {
  return (
    <Container>
    <FoodCardContainer>
    <FoodCards>
        {data?.map((food) => 
       
       <FoodCard>
            <div className="food_image">
                <img src={BASE_URL + food.image} alt="" srcset="" />
            </div>
            <div className="food_info">
                <div className="info">
                    <h3>{food.name}</h3>
                    <p>{food.text}</p>
                </div>
                <Button>{food.price.toFixed(2)}</Button>
            </div>
        </FoodCard>)}
    </FoodCards>
  </FoodCardContainer>
    </Container>
  )
}

export default SearchResult;

const FoodCardContainer = styled.section`
  background-image: url("/bgImg.png");
  background-color: transparent;
  background-size: cover;
  min-height: calc(100vh - 220px);
`;

const FoodCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 20px;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
`;

const FoodCard = styled.div`
    width: 370px;
    height: 170px;
    radial-gradient(
        80.38% 222.5% at -13.75% -12.36%,
        #98f9ff 0%,
        rgba(255,255,255,0) 100%
    );
    
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(13.1842px);
    
    border-radius: 20px;
    display: flex;
    padding: 8px;

    .food_info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;

        h1 {
            font-size: 16px;
            margin-top: 8px;
            font-weight: 500;
        }
        p {
            font-size: 16px;
            margin-top: 8px;
        }
        button {
            font-size: 12px;
        }

    }


`;