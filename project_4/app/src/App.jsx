import { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components';
import SearchResult from './components/SearchResult/SearchResult';

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterdData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");


  useEffect(() => {
    const FetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
    
        setData(json);
        setLoading(false);
        setFilteredData(json);
      } catch (error) {
        setError(`Unable to fetch data`);
      }
    }
    FetchFoodData();
  }, []);

  const filteredbtns = [
      {
        name: "All",
        type: "all"
      },
      {
        name: "Breakfast",
        type: "breakfast"
      },
      {
        name: "Lunch",
        type: "lunch"
      },
      {
        name: "Dinner",
        type: "dinner"
      },
  ];

  const searchFood = (e) => {
      const searchValue = e.target.value;

      if (searchValue == "") {
        setFilteredData(null);
      }
      const filter = data?.filter(food => 
        food.name.toLowerCase().includes(searchValue.toLowerCase()));

      setFilteredData(filter);
  };

  const filterFood = (type) => {
    if (type === "all")  {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter(food => 
      food.type.toLowerCase().includes(type.toLowerCase()))

    setFilteredData(filter);
    setSelectedBtn(type);
  };

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading......</div>

  return (
    <>
    <Container>
        <TopContainer>
          <div className="logo">
            <img src="FoodyZone.svg" alt="Logo"  />
          </div>

          <div className="search">
            <input onChange={searchFood} placeholder='Search Food' />
          </div>
        </TopContainer>

      <FilterContainer>
        {filteredbtns.map(value =>  <Button isSelected={selectedBtn === value.type} onClick={() => filterFood(value.type)}>{value.name}</Button>) }
      </FilterContainer>

    </Container>
    <SearchResult data={filterdData} />
    </>
       
  )
}

export default App;
export const Container = styled.div`
    max-width: 1200px;
    margin: 0px auto;
`;


const TopContainer = styled.section`
  .search  {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder {
        color: white;
      }
    }
  }

  display: flex;
  justify-content: space-between;
  padding: 16px;
  min-height: 140px;
  align-items: center;
  .logo {
    background-color: #323334;
  }

  @media(0 < width < 700px) {
    flex-direction: column;
    height: 120px;
  } 
`;

const FilterContainer = styled.section`
    display: flex;
    justify-content: center;
    gap: 12px;
    padding-bottom: 40px;
`;


export const Button = styled.button`
    background: ${({isSelected}) => (isSelected ? "#f22f2f" : "#ff4343") };
    outline: 1px solid ${({isSelected}) => (isSelected ? "white" : "#ff4343") };
    border-radius: 5px;
    padding: 6px 12px;
    color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #f22f2f;
    }
`;