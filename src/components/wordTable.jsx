import React, {useState} from 'react';
import styles from './styles/wordTable.css';
import WordLine from './wordLine';
import data from '../words.json';
import Plus from './images/plus.png';

let wordsArr = data;



class WordTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addWord: false,
            newWord: '',
            newTranscription: '',
            newTranslation: '',
            error: false,
            wordError: false
        }
    }

    openAdding =() =>{
        let openAdding = !this.addWord;
        this.setState({addWord: openAdding});
    }

    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    handleValidation = () => {
        debugger;
        if(this.state.newWord == '' || this.state.newWord.match(/[А-Яа-яЁё]/gm)){
            document.getElementById('wordInput').classList.toggle('wordChangeInput__Error');
            this.setState(this.wordError = true);
        } else if(this.state.newTranscription == ''){
            document.getElementById('transcriptionInput').classList.toggle('wordChangeInput__Error');
        } else if (this.state.newTranslation == '' || this.state.newTranslation.match(/[A-Za-z]/gm)){
            document.getElementById('translationInput').classList.toggle('wordChangeInput__Error');
        }

    }


    render(){
        return(

        <div className='wordTable'>
            {this.addWord && 
            <div className='wholeWindow'>
                <div className='addNewWordForm'>
                    <div className='addNewWordForm_close' onClick={this.openAdding}>
                        X
                    </div>
                    <div>Введите новое слово на английском: 
                        <input type='text' name='newWord' id='wordInput' value={this.newWord} onChange={this.handleChange}/>
                        {this.wordError&&<div className='inputError'>Поле ввода не должно быть пустым и должно содердать только латинские буквы!</div>}
                    </div>
                    <div>
                        Введите транскрипцию:
                        <input type='text' name='newTranscription' id='transcriptionInput' value={this.newTranscription} onChange={this.handleChange}/>
                    </div>
                    <div>
                        Введите перевод:
                        <input type='text' name='newTranslation' id='translationInput' value={this.newTranslation} onChange={this.handleChange}/>
                    </div>
                    <button type='button' className='button__save button__add' onClick={this.handleValidation} >Сохранить</button>
                </div>        
            </div>
            }
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
            <WordLine words={wordsArr}></WordLine>

            <div className='addButton' onClick={this.openAdding}><img alt='Add new word' src={Plus} className='addButton_img'/></div>
        </div>

        )
        
    }
}

export default WordTable;