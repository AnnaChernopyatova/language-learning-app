import React from 'react';
import styles from './styles/changeWord.css';

class ChangeWord extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            wordEditable: props.word,
            transcriptionEditable: props.transcription,
            translationEditable: props.translation,
            blockButton: false
        };
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
        this.blockButton();
    }

    blockButton = () =>{
        if(this.state.wordEditable == '' || this.state.transcriptionEditable == '' || this.state.translationEditable == ''){
            this.setState({blockButton: true})}
        else this.setState({blockButton: false});
    }

    saveChanges = () =>{
        if(this.state.wordEditable.match(/[А-Яа-яЁё]/gm)){
            document.getElementById('wordInput').classList.toggle('wordChangeInput__Error');
            alert('Поле ввода слова должно содержать только латинские буквы!');
            return;
        }

        if(this.state.translationEditable.match(/[A-Za-z]/gm)){
            document.getElementById('translationInput').classList.toggle('wordChangeInput__Error');
            alert('Поле ввода перевода должно содержать только русские буквы!');
            return;
        } 
        
        console.log(this.state.wordEditable, this.state.transcriptionEditable, this.state.translationEditable);
        this.props.handleChange();
        this.formWord();
    }

    formWord =() =>{
        let word = {
            id: this.props.number,
            english: this.state.wordEditable,
            transcription: this.state.transcriptionEditable,
            russian: this.state.translationEditable
        }
        this.sendChanges(word);
    }

    sendChanges = (word) =>{
        fetch(`http://sandbox.itgirlschool.ru/api/words/${this.props.number}/update`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            },
            body: JSON.stringify(word)
        });
    }

    render(){
    return(
        <div className='wordLine'>
            <div className=' wordLine_word'>
                <input className={this.state.wordEditable == '' && 'wordChangeInput__Error'} type='text' name='wordEditable' id='wordInput' value={this.state.wordEditable} onChange={this.handleChange} />
            </div>
            <div className='wordLine_transcription'>
                <input className={this.state.transcriptionEditable == '' && 'wordChangeInput__Error'} type='text' name='transcriptionEditable' value={this.state.transcriptionEditable} onChange={this.handleChange} />
            </div>
            <div className='wordLine_translation'>
                <input className={this.state.translationEditable == '' && 'wordChangeInput__Error'} type='text' name='translationEditable' id='translationInput' value={this.state.translationEditable} onChange={this.handleChange} />
            </div>
            <div className='wordLine_empty'>
                <button className='button button__save' disabled = {this.state.blockButton == true && true} onClick={this.saveChanges} >Сохранить</button>
                <button className='button button__delete' onClick={this.props.handleChange}>Отменить</button>
            </div>
        </div>
    )
    }
}



export default ChangeWord;