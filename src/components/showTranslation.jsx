import React, {useRef, useEffect} from 'react';


const ShowTranslation = (props) => {

    let words = props.words;

    const ref = useRef();
    useEffect(() => {
        props.showButton && ref.current.focus();
    }, [props.showButton, props.cardNumber]);
    

    return(
        <div>
            {props.showButton &&
                <button className='card_button' onClick={props.handleChange} ref={ref}>
                    Показать перевод
                </button>
            }
            {props.showTranslation&&
                <div className='card_translation'>
                    {words[props.cardNumber-1].russian}
                </div>
            }
        </div>
    )
}

export default ShowTranslation;