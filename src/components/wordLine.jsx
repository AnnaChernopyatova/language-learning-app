import React, {useContext} from 'react';
import WordsContext from './context/wordsContext';
import WordType from './wordType';





function WordLine (props){
    const words = useContext(WordsContext);

    
    return(
        words.map((word => {
            return(
                <WordType
                    number={word.id}
                    word={word.english}
                    transcription={word.transcription}
                    translation={word.russian}
                    change={false}
                    {...props}
                > </WordType>
            )
        }
        ))
    )

}

export default WordLine;