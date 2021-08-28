import React from 'react';
import './wordType'
import data from '../words.json';




function WordLine (props){
    return(
        console.log(typeof(props.words)),
        props.words.map((word => {
            return(
                <wordType
                    number={word.id}
                    word={word.english}
                    transcription={word.transcription}
                    translation={word.russian}
                    change={false}
                />
            )
        }
        ))
    )

}

export default WordLine;