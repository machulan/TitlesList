import {observable, action} from 'mobx';
import 'babel-polyfill';

class TitleListItemStore {
    key;
    @observable title;
    @observable publicationPlace;

    constructor(key, title, publicationPlace) {
        this.key = key;
        this.title = title;
        this.publicationPlace = publicationPlace;
    }
}

class TitlesListStore {
    @observable titlesList = [];
    @observable searchInputValue = '';

    @action setSearchInputValue = (value) => {
        this.searchInputValue = value;
    }

    formatTitle = (title) => {
        return title.substr(0, 23);
    }

    formatPublicationPlace = (publicationPlace) => {
        return publicationPlace.substr(0, 45);
    }

    @action async fetchData() {
        const url = 'https://chroniclingamerica.loc.gov/search/titles/results/?terms=' + this.searchInputValue + '&format=json&page=1';
        let response = await fetch(url);
        let data = await response.json();
        this.titlesList = data.items.map(item => new TitleListItemStore(item.id, this.formatTitle(item.title), this.formatPublicationPlace(item.place_of_publication)));
    }
}

var titlesListStore = new TitlesListStore();
export default titlesListStore;