import React, {useState, useEffect} from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import styles from './styles/header.css';
import ShowCards from './showCards';
import WordTable from './wordTable';
import data from '../words.json';
import homeicon from './images/homeicon.svg';
import Error from "./Error";

let wordsArr = data;

const WordsContext = React.createContext;

export default function Header(){

    const[loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);

        fetch('/api/words')
            .then((response) => console.log(response.json()))
    }, [])

    return(
        <Router>
            <div className='header'>
                <nav className='header_nav'>
                <Link to='/'><img src={homeicon} alt="Home button" className='showCard_homeImage'/></Link>
                    <ul className='navList'>
                        <li className='navList_item'>
                            <Link to='/' className='navList_a'>Main Page</Link>
                        </li>
                        <li className='navList_item'>
                            <Link to='/showCards' className='navList_a'>Word Training</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path='/showCards'>
                        <ShowCards wordsArr={wordsArr}/>
                    </Route>
                    <Route path='/'>
                        <WordTable/>
                    </Route>
                    <Route>
                        <Error></Error>
                    </Route>
                </Switch>
            </div>
        </Router>

    )
}