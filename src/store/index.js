import {observable, action} from 'mobx';
import TitleListItemStore from './titleListItemStore';
import 'babel-polyfill';

class TitlesListStore {
    @observable titles = [];
    @observable searchInputValue = '';

    @action setSearchInputValue = (value) => {
        this.searchInputValue = value;
    }

    @action async fetchData() {
        const url = `http://localhost:3000/titles?terms=${this.searchInputValue}`;
        let response = await fetch(url);
        let data = await response.json();
        this.titles = data.map(item => new TitleListItemStore(item.id, item.title, item.publicationPlace));
    }
}

var titlesListStore = new TitlesListStore();
export default titlesListStore;