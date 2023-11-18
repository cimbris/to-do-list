export default class Model{
    constructor(){
        this.allNotesMassive = [];
        this.storageLoader();
    }

    storageLoader(){
        const noteHolder = localStorage.getItem('notes');
        if(noteHolder){
            this.allNotesMassive = JSON.parse(noteHolder);
        }
    }
}