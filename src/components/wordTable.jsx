import React from 'react';
import styles from './styles/wordTable.css';
import WordLine from './wordLine';
import data from '../words.json';

let wordsArr = data;



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
            <div className='wordTable_header wordtable_header__empty'>
                
            </div>
            <WordLine words={wordsArr}></WordLine>
        </div>

        );
        
}

export default WordTable;