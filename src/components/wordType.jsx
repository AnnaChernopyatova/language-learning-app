import React from 'react';
import styles from './styles/wordList.css';


function WordList (number, word, transcription, translation, change){
    return(
        <div className='line'>
            <div className='lineNumber'>
                {number}
            </div>
            {change 
                ? <changeWord></changeWord>
                :<div><div>{word}</div> <div>{transcription}</div> <div>{translation} </div></div>}  
            
            
            <input type='text' id='wordChageInput'/> <input type='text' id='transcriptionChangeInput'/> <input type='text' id='translationChangeInput'/> <button>Save</button> <button>Cancel</button> : <div>{word}</div>
        </div>
    )
}

export default WordList;