import './App.css';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Meals></Meals>
    </div>
  );
}

export default App;


// https://www.themealdb.com/api/json/v1/1/search.php?s
// const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
