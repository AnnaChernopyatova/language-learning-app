import './App.css';
import Card from './components/card';
import WordTable from './components/wordTable';
import data from './words.json';

let wordsArr = data;
console.log(wordsArr);

function App() {
  return (
    <div className="App">
      <WordTable></WordTable>

      <Card words={wordsArr}></Card>
    </div>
  );
}

export default App;
