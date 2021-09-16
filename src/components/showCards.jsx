import React, {useState} from 'react';

import arrowleft from './images/arrowleft.svg';
import arrowright from './images/arrowright.svg';
import Card from './card';
import CardsEnded from './cardsEnded';
import styles from './styles/showCards.css'


function ShowCards(props){
    let[cardNumber, changenumber] = useState(props.cardNumber|| 1 );


    const handlenumber = () =>{
        changenumber(cardNumber = 1);
    }

    return(
        <div className="showCard">
            {cardNumber > props.wordsArr.words.length? 
            <CardsEnded handlenumber={handlenumber}></CardsEnded>
            : <div className="showCard_card">
                <button className='showCard_button' disabled={cardNumber == 1&& true} onClick={()=> changenumber(cardNumber-1)}>
                    <img src={arrowleft} alt="Arrow left" className='showCard_buttonImg'/>
                </button>
                <div>
                    <Card 
                        cardNumber = {cardNumber} {...props}>
                    </Card>
                    {cardNumber}/{props.wordsArr.words.length}
                </div>
                <button className="showCard_button" onClick={()=> changenumber(cardNumber+1)}>
                    <img src={arrowright} alt="Arrow right" className='showCard_buttonImg'/>
                </button>
            
            </div>}
        </div>
    )
}

export default ShowCards;