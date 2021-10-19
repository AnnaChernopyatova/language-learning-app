import { action, computed, makeObservable, observable, reaction } from 'mobx';

class WordsStore{
  words = [];

  constructor(){
    makeObservable(this,{
      words: observable,
      loadData: action, 
      sendNewChanges: action,
      sendChanges: action,
      deleteWord: action
    }
    )
  }

    loadData () {
        try {
          fetch('http://itgirlschool.justmakeit.ru/api/words')
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              this.words = result;
            });
        } catch (error) {
        }
        return this.words;
    }

    sendNewChanges (word) {
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
    }

    sendChanges (word) {
      this.props.setLoading(true);
      fetch(`/api/words/${this.props.number}/update`,{
          method:'POST',
          headers:{
              'Content-Type':'application/json;charset=utf-8'
          },
          body: JSON.stringify(word)
      })
      .then(response => {
          if (response.ok) { 
              return response.json();
          } else {
              throw new Error('Something went wrong ...');
          }
      })
    }

    deleteWord (id) {
      fetch(`/api/words/${id}/delete`,{
          method: 'POST',
          headers:{
              'Content-Length': '0'
          }
      })
      .then(response => {
          if (response.ok) { 
              return response.json();
          } else {
              throw new Error('Something went wrong ...');
          }
      })
    }

}

export default WordsStore;