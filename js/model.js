export default class Model{
    constructor(){
        this.allNotesMassive = [1,3,4,5,5,632,6];
        this.storageLoader();
        
    }

    // забирает из локалки notes
    storageLoader(){
        const noteHolder = localStorage.getItem('notes');
        if(noteHolder){
            this.allNotesMassive = JSON.parse(noteHolder);
        }
    }

    // сейв в локалку
    storageSaver(){
        localStorage.setItem('notes',JSON.stringify(this.allNotesMassive))
    }

    // добавляет в массив и в локалку текст из заметки
    addNote(text){
        this.allNotesMassive.push(text);
        this.storageSaver();
        return text;
    }

}
