import React, {useState} from 'react';
import styles from './styles/changeWord.css';

function ChangeWord (props){
    const [wordEditable, editWord] = useState(props.word);
    const [transcriptionEditable, editTranscription] = useState(props.transcription);
    const [translationEditable, editTranslation] = useState(props.translation);

return(
<div className='wordLine'>
    <div className=' wordLine_word'>
        <input className='wordChangeInput' type='text' id='wordChageInput' value={wordEditable}/>
    </div>
    <div className='wordLine_transcription'>
        <input className='wordChangeInput' type='text' id='transcriptionChangeInput' value={transcriptionEditable}/>
    </div>
    <div className='wordLine_translation'>
        <input className='wordChangeInput' type='text' id='translationChangeInput' value={translationEditable} />
    </div>
    <div className='wordLine_empty'>
        <button className='button button__save'>Сохранить</button>
        <button className='button button__delete' onClick={props.handleChange}>Отменить</button>
    </div>

</div>
)
}

export default ChangeWord;