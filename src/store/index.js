import {observable, action} from 'mobx';
import TitleListItemStore from './titleListItemStore';

const mockTitles = [    
    new TitleListItemStore('0', 'title1', 'publicationPlace1'),
    new TitleListItemStore('1', 'title2', 'publicationPlace2'),
    new TitleListItemStore('2', 'title3', 'publicationPlace3'),
    new TitleListItemStore('3', 'title4', 'publicationPlace4'),
    new TitleListItemStore('4', 'title5', 'publicationPlace5')
];

class TitlesListStore {
    @observable titles = [];
    @observable searchInputValue = '';

    @action setSearchInputValue = (value) => {
        this.searchInputValue = value;
    }

    @action setMockData = () => {
        this.titles.splice(0, this.titles.length);
        this.titles.push(...mockTitles);
    }

    @action fetchData = () => {

    }
}

var titlesListStore = new TitlesListStore();
export default titlesListStore;