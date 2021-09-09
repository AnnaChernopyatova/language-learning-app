import './App.css';
import Card from './components/card';
import WordTable from './components/wordTable';
import ShowCards from './components/showCards';
import data from './words.json';


let wordsArr = data;
console.log(wordsArr);

function App() {
  return (
    <div className="App">
      <WordTable></WordTable>

      <ShowCards wordsArr={wordsArr}></ShowCards>
    </div>
  );
}

export default App;
