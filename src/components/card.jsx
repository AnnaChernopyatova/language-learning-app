import React, {useState, useEffect} from 'react';
import styles from './styles/card.css';
import ShowTranslation from './showTranslation';

function Card(props){

    let word = props.wordsArr.words;
    console.log(props.cardNumber);


    return(
        <div className='card'>
            <h3 className='card_word'>{word[props.cardNumber-1].english}</h3>
            <div>
                {word[props.cardNumber-1].tags}
            </div>
            <div className='card_transcription'>
                {word[props.cardNumber-1].transcription}
            </div>
            <ShowTranslation{...props}></ShowTranslation>
        </div>
    )
}

export default Card;