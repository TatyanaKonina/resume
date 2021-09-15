export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllBooks() {
        return this.getResource(`/books/`);
    }

    getBook(id) {
        return this.getResource(`/books/${id}/`);
    }

    async getAllCharacters() {
        console.log('start')
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        console.log(res)
        return res.map(this._transformCharacter);
    }
    isSet(data) {
        if (data) {
            return data
        } else {
            return 'no data :('
        }
    }    
    

    async getCharacter(id) {
        const res = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(res)
    }

    getAllHouses() {
        return this.getResource(`/houses/`);
    }

    getHouse(id) {
        return this.getResource(`/houses/${id}/`);
    }
    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died), 
            culture: this.isSet(char.culture)
        };
    }
    _transformHouse(house){
        return {
            name: house.name,
            region: house.region,
            words:house.words,
            titles:house.titles,
            overlord:house.overlord,
            ancestralweapons:house.ancestralweapons


        }

    }
    _transformBook(book){
        return {
            name:book.name,
            numberOfPages:book.numberOfPages,
            publiser :book.publiser,
            released:book.released
        }
    }
}