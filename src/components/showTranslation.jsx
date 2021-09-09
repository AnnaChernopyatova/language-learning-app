import React, {useState} from 'react';


function ShowTranslation(props){
    const [showButton, setShowButton] = useState(props.showButton || true);
    const [showTranslation, setShowTranslation] = useState(props.showTranslation || false);

    const handleChange = () =>{
        setShowButton(!showButton);
        setShowTranslation(!showTranslation);
    }

    let word = props.wordsArr.words;

    return(
        <div>
            {showButton &&
                <button className='card_button' onClick={handleChange}>
                    Показать перевод
                </button>
            }
            {showTranslation&&
                <div className='card_translation'>
                    {word[props.cardNumber-1].russian}
                </div>
            }
        </div>
    )
}

export default ShowTranslation;