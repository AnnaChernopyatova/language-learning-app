import React, {useContext} from 'react';
import WordsContext from './wordsContext';
import WordType from './wordType';





function WordLine (props){
    let words = useContext(WordsContext);
    
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

export default WordLine;