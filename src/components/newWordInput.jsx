import React from 'react';



export default class NewWordInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newWord: '',
            newTranscription: '',
            newTranslation: '',
            error: false,
            wordError: false
        }
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
        else this.formWord();
    }

    formWord =() =>{
        let word = {
            id: this.props.words.length,
            english: this.state.wordEditable,
            transcription: this.state.transcriptionEditable,
            russian: this.state.translationEditable
        }
        this.setState(this.newWord, this.newTranscription, this.newTranslation = '');
        this.sendChanges(word);
    }

    sendChanges = (word) =>{
        fetch(`/api/words/add`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            },
            body: JSON.stringify(word)
        })
        .then(response => {
            if (response.ok){
                return response.json();
            } else {
                throw new Error('Something went wrong...')
            }
        })
        .then(this.props.loadData());
        
        this.props.openAdding(false);
    }
    
    render(){
        return(
            <div className='wholeWindow'>
                <div className='addNewWordForm'>
                    <div className='addNewWordForm_close' onClick={this.props.openAdding}>
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
        )
    }
}