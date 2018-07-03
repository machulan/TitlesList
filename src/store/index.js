import {observable, action} from 'mobx';

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

const mockTitlesList = [
    new TitleListItemStore('0', 'title1', 'publicationPlace1'),
    new TitleListItemStore('1', 'title2', 'publicationPlace2'),
    new TitleListItemStore('2', 'title3', 'publicationPlace3'),
    new TitleListItemStore('3', 'title4', 'publicationPlace4'),
    new TitleListItemStore('4', 'title5', 'publicationPlace5')
];

class TitlesListStore {
    @observable titlesList = [];
    @observable searchInputValue = '';

    @action setSearchInputValue = (value) => {
        this.searchInputValue = value;
    }

    @action setMockData = () => {
        this.titlesList = mockTitlesList;
    }

    @action fetchData = () => {

    }
}

var titlesListStore = new TitlesListStore();
export default titlesListStore;