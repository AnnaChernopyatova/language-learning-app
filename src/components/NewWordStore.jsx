import { action, observable, reaction } from 'mobx';

class NewWordStore{
    @observable words = [];

    @action loadData=() =>{
        try {
          fetch('http://itgirlschool.justmakeit.ru/api/words')
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              words = result;
              setLoading(false);
            });
        } catch (error) {
          setError(true);
          setLoading(false);
        }
        return this.words;
    }

}