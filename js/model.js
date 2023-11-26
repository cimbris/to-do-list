export default class Model{
    constructor(){
        this.allNotesMassive = [1,3,4,5,5,632,6];
        this.storageLoader();
        
    }

    storageLoader(){
        const noteHolder = localStorage.getItem('notes');
        if(noteHolder){
            this.allNotesMassive = JSON.parse(noteHolder);
        }
    }


    storageSaver(){
        localStorage.setItem('notes',JSON.stringify(this.allNotesMassive))
    }

    addNote(text){
        this.allNotesMassive.push(text);
        this.storageSaver();
        return text;
    }

}
