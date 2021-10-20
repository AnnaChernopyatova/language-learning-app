import { action, makeObservable, observable } from 'mobx';

class WordsStore{
  words = [];
  loading = false;
  error = false;

  constructor(){
    makeObservable(this,{
      words: observable,
      loading: observable,
      error: observable,
      loadData: action, 
      sendNewChanges: action,
      sendChanges: action,
      deleteWord: action
    }
    )
  }

    loadData () {
        this.loading = true;
        try {
          fetch('http://itgirlschool.justmakeit.ru/api/words')
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              this.words = result;
              this.loading = true;
            });
        } catch (error) {
            this.error = true;
            this.loading = false;
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