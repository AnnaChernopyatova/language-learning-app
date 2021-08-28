import React from 'react';
import styles from './styles/wordTable.css';
import WordLine from './wordLine';
import WordList from './wordType';
import data from '../words.json';

let wordsArr = data;
console.log(wordsArr);



function WordTable (props){
    return(
        <div className='wordTable'>
            <div className='wordTable_header wordTable_header__num'>
                #
            </div>
            <div className='wordTable_header wordTable_haeder__word'>
                Word
            </div>
            <div className='wordTable_header wordTable_haeder__transcription'>
                Transcription
            </div>
            <div className='wordTable_header wordTable_haeder__translation'>
                Translation
            </div>
            <WordLine words={wordsArr}></WordLine>
        </div>

        );
        
}

export default WordTable;