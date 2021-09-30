import React, {useState} from 'react';
import ChangeWord from './changeWord';
import styles from './styles/wordType.css';


function WordType (props){
    const [change, setChange] = useState(false);

    const handleChange = () =>{
        setChange(!change);
    }
    return(
        <div className='line'>
            <div className='wordline_Number'>
                {props.number}
            </div>
            {change 
                ? <ChangeWord handleChange={handleChange} {...props}></ChangeWord>
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
                <div className='wordLine_empty'>
                    <button className='button button__change' onClick={handleChange}>
                        Редактировать
                    </button>
                    <button className='button button__delete'>
                        Удалить
                    </button>
                </div>
                </div>}
        </div>
    )
}

export default WordType;