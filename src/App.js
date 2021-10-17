import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import Loading from './components/Loading';
import Errors from "./components/Errors";
import WordsContext from './components/context/wordsContext';



function App() {

  let[loading, setLoading] = useState(false);
    const[words, setWords] = useState([]);
    let[error, setError] = useState(false);

    const loadData=() =>{
      try {
        fetch('http://itgirlschool.justmakeit.ru/api/words')
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            setWords(result);
            setLoading(false);
          });
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }

    useEffect(() => {
      setLoading(true);
      loadData();
    }, [])

    if (error === true){
      return (<Errors></Errors>)
  }

  if (loading === true){
      return(
          <Loading></Loading>
      )
  }
  return (
    <div className="App">
      <WordsContext.Provider value = {words} >
          <Header loadData={loadData} setLoading={setLoading}></Header>
      </WordsContext.Provider>
    </div>
  );
}

export default App;
