import React, {useContext} from 'react';
import WordsContext from './context/wordsContext';
import WordType from './wordType';
import stores from './stores';
import {inject, observer} from 'mobx-react';





const WordLine = inject(['WordsStore'])(observer(({WordsStore}) => {
    //const words = useContext(WordsContext);

    const {words} = WordsStore;
    
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
));

export default WordLine;