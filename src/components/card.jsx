import React, {useState, useEffect} from 'react';
import styles from './styles/card.css';
import ShowTranslation from './showTranslation';

function Card(props){
    let [showButton, setShowButton] = useState(props.showButton || true);
    let [showTranslation, setShowTranslation] = useState(props.showTranslation || false);

    let word = props.wordsArr.words;

    useEffect(() =>{
        setShowButton(showButton = true);
        setShowTranslation(showTranslation = false);
    },[props.cardNumber]);

    const handleChange = () =>{
        setShowButton(!showButton);
        setShowTranslation(!showTranslation);
        if (showTranslation == false){
            props.moreWordsLearnt();
        }
    }


    return(
        <div className='card'>
            <h3 className='card_word'>{word[props.cardNumber-1].english}</h3>
            <div>
                {word[props.cardNumber-1].tags}
            </div>
            <div className='card_transcription'>
                {word[props.cardNumber-1].transcription}
            </div>
            <ShowTranslation {...props} handleChange={handleChange} showButton = {showButton} showTranslation = {showTranslation}></ShowTranslation>
        </div>
    )
}

export default Card;