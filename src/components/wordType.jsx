import React from 'react';
import ChangeWord from './changeWord';
import styles from './styles/wordType.css';


function WordType (props){
    return(
        <div className='line'>
            <div className='wordline_Number'>
                {props.number}
            </div>
            {props.change 
                ? <ChangeWord></ChangeWord>
                :<div className='wordLine'>
                    <div className=' wordLine_word'>
                        {props.word}
                    </div> 
                    <div className='wordLine_transcription'>
                        {props.transcription}
                    </div> 
                    <div className='wordLine_translation'>
                        {props.translation} 
                    </div>
                </div>}  
                <div className='wordLine_empty'>
                    <button className='button button_change'>
                        Редактировать
                    </button>
                    <button className='button button_delete'>
                        Удалить
                    </button>
                </div>
        </div>
    )
}

export default WordType;