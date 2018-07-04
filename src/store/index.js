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
        const url = `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${this.searchInputValue}&format=json&page=1`;
        let response = await fetch(url);
        let data = await response.json();
        this.titles = data.items.map(item => new TitleListItemStore(item.id, item.title, item.place_of_publication));
    }
}

var titlesListStore = new TitlesListStore();
export default titlesListStore;