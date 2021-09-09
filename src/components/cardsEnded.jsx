import React from 'react';

function CardsEnded(props){

    return(
        <div>
            Карточки закончились. Вы молодец!
            <button onClick={()=>props.handlenumber}>
                Начать сначала.
            </button>
        </div>
    )
}

export default CardsEnded;