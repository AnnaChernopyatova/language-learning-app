import React from 'react';
import WordType from './wordType';





function WordLine (props){
    return(
        props.words.words.map((word => {
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