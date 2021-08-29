import React from 'react';
import styles from './styles/card.css';

function Card(props){
    return(
        <div className='card'>
            {console.log(props)}
            <h3 className='card_word'>{props.words.words[0].english}</h3>
            <div>
                {props.words.words[0].tags}
            </div>
            <div className='card_transcription'>
                {props.words.words[0].transcription}
            </div>
            <button className='card_button'>
                Показать перевод
            </button>
        </div>
    )
}

export default Card;