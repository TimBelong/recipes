import './App.css';
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import mealsData from './data/meals.json';
import RecipeFinder from "./Components/RecipeFinder";

function App() {
  return (
    <div className="App px-4 md:px-16 lg:px-32 xl:px-80 py-5">
      <Header />
      <Meals mealsData={mealsData} />
      <RecipeFinder mealsData={mealsData} />
    </div>
  );
}

export default App;
