import {observable} from 'mobx';

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

export default TitleListItemStore;