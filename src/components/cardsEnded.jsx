import React from 'react';
import workDone from './images/workDone.jpg'
import styles from './styles/cardsEnded.css';

function CardsEnded(handlenumber){
    console.log(handlenumber.handlenumber);

    return(
        <div className='cardsFinished'>
            <h2 className='cardsFinished_header'>
                Карточки закончились. Вы молодец!
            </h2>
            <img alt='Done work' src={workDone} className='cardsFinished_pic'/>
            <button className='cardsFinished_button' onClick={()=>handlenumber.handlenumber()}>
                Начать сначала
            </button>
        </div>
    )
}

export default CardsEnded;