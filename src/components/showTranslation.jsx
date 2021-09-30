import React, {forwardRef, useState} from 'react';


const ShowTranslation = forwardRef((props, ref) => {

    let word = props.wordsArr.words;

    return(
        <div>
            {props.showButton &&
                <button className='card_button' onClick={props.handleChange} ref={ref}>
                    Показать перевод
                </button>
            }
            {props.showTranslation&&
                <div className='card_translation'>
                    {word[props.cardNumber-1].russian}
                </div>
            }
        </div>
    )
})

export default ShowTranslation;