import './App.css';
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import mealsData from './data/meals.json';
import RecipeFinder from "./Components/RecipeFinder";
import SearchByName from "./Components/SearchByName";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchByName mealsData={mealsData} />
      <Meals mealsData={mealsData} />
      <RecipeFinder mealsData={mealsData} />
    </div>
  );
}

export default App;
