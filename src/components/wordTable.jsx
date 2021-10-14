import React, {useState, useContext} from 'react';
import styles from './styles/wordTable.css';
import WordLine from './wordLine';
import Plus from './images/plus.png';
import NewWordInput from './newWordInput';
import WordsContext from './wordsContext';





function WordTable (props){

    let [addWord, setAddWord] = useState(false);
    let words = useContext(WordsContext);

    let openAdding =() =>{
        setAddWord(!addWord);
    }

    return(
        <div className='wordTable'>
            {addWord && <NewWordInput openAdding = {openAdding} words = {words} {...props}></NewWordInput>}
            <div className='wordTable_header wordTable_header__num'>
                #
            </div>
            <div className='wordTable_header wordTable_haeder__word'>
                Word
            </div>
            <div className='wordTable_header wordTable_haeder__transcription'>
                Transcription
            </div>
            <div className='wordTable_header wordTable_haeder__translation'>
                Translation
            </div>
            <div className='wordTable_header wordtable_header__empty'>
                
            </div>
            <WordLine></WordLine>

            <div className='addButton' onClick={openAdding}><img alt='Add new word' src={Plus} className='addButton_img'/></div>
        </div>

        );
        
}

export default WordTable;