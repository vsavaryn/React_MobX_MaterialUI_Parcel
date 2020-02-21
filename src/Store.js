import initialData from './data';
import {action, computed, decorate, observable} from "mobx";

class Store {
    data = [
        ...initialData
    ];

    addItem(item) {
        this.data.push({
            id: Date.now(),
            title: '<empty title>',
            imageSrc: 'https://source.unsplash.com/1600x900/?beach',
            description: '<empty description>',
            ...item
        });
    }

    editItem(item) {
        const indexToReplace = this.data.findIndex(({id: itemId}) => itemId === item.id);
        this.data.splice(indexToReplace, 1, item);
    }

    deleteItem(id) {
        // this.data = this.data.filter(({id: itemId}) => itemId !== id);
        const indexToDelete = this.data.findIndex(({id: itemId}) => itemId === id);
        this.data.splice(indexToDelete, 1,);
    }

    get itemCount() {
        return this.data.length;
    }
}


Store = decorate(Store, {
    data: observable,
    addItem: action,
    deleteItem: action,
    itemCount: computed,
});

export default Store;
