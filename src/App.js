import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import Loading from './components/Loading';
import Errors from "./components/Errors";


function App() {

  let[loading, setLoading] = useState(false);
    const[words, setWords] = useState([]);
    let[error, setError] = useState(false);

    useEffect(()=>{
        setLoading(true);

        fetch('/api/words')
            .then((response) => response.json())
            .then((response) =>(
                console.log(response),
                setWords(response),
                setLoading(false)
            ))
            .catch(error => setError(true), setLoading(false))
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
