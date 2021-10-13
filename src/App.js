import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import Loading from './components/Loading';
import Errors from "./components/Errors";


function App() {

  let[loading, setLoading] = useState(false);
    const[words, setWords] = useState([]);
    let[error, setError] = useState(false);

    useEffect(() => {
      setLoading(true);
      try {
        fetch('/api/words')
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
      <Header></Header>
    </div>
  );
}

export default App;
