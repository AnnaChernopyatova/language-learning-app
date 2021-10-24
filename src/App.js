import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import Loading from './components/Loading';
import Errors from "./components/Errors";
import WordsContext from './components/context/wordsContext';
import WordsStore from './components/WordsStore';
import stores from './components/stores';
import { inject, observer, Provider } from 'mobx-react';



const App = inject(['WordsStore'])(observer(({WordsStore}) =>  {

  const {loading, error, loadData } = WordsStore;

   useEffect(() =>{
     loadData();
   });

  //let[loading, setLoading] = useState(false);
    //const[words, setWords] = useState([]);
    //let[error, setError] = useState(false);

    /*const loadData=() =>{
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
      setWords(WordsStore.loadData);
      setLoading(false);
    }, [])*/

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
          <Header /*setLoading={setLoading}*/></Header>
    </div>
  );

}
));


export default App;