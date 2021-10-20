import React, {useContext} from 'react';
import WordsContext from './context/wordsContext';
import WordType from './wordType';
import {inject, observer} from 'mobx-react';





function WordLine ({words}){
    //const words = useContext(WordsContext);

    
    return(
        words.map((word => {
            return(
                <WordType
                    number={word.id}
                    word={word.english}
                    transcription={word.transcription}
                    translation={word.russian}
                    change={false}
                > </WordType>
            )
        }
        ))
    )

}

export default inject (({WordsStore}) =>{
    const {words} = WordsStore;

    return words;
})(observer(WordLine));