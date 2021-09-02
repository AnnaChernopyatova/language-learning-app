import React, {useState} from 'react';
import styles from './styles/card.css';

function Card(props){
    const [showButton, setShowButton] = useState(props.showButton || true);
    const [showTranslation, setShowTranslation] = useState(props.showTranslation || false);

    const handleChange = () =>{
        setShowButton(!showButton);
        setShowTranslation(!showTranslation);
    }

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
            {showButton &&
            <button className='card_button' onClick={handleChange}>
                Показать перевод
            </button>
            }
            {showTranslation&&
            <div className='card_translation'>
                {props.words.words[0].russian}
            </div>
            }
        </div>
    )
}

export default Card;