export default class View{
    constructor(allNotesMassive){
        allNotesMassive.forEach(elemArray =>{
            this.noteRender(elemArray)
        })
    }

    // переменные
    elementsControl = {
        list: document.querySelector('.list'),
        search: document.querySelector('#search'),
        addNote: document.querySelector('#textInput'),
        btn:  document.querySelector('#submitBtn'),
    }

    // рендерит заметку как элемент массива и засовывает ее в начало списка заметок
    noteRender(elemArray){
        const newNote = `
        <li class="list__item">
        <p class="list__text">${elemArray}</p>
        <button class="btn btn--item trash">

        </button>
        </li>
        `
        this.elementsControl.list.insertAdjacentHTML('afterbegin', newNote)
        
    }

    // для каждого элемента списка запускает функцию в которую передается значение инпута для поиска, приводит к нижнему регистру и при совпадении кидает дисплей флекс, наоборот: дисплей нан
    filterNotes(searchValue, list){
        list.forEach(function(note){
        let noteLowerCase = note.textContent.toLowerCase()
        if(noteLowerCase.indexOf(searchValue) !== -1){
            note.closest('.list__item').style.display = 'flex'
        }
        else{
            note.closest('.list__item').style.display = 'none'
        }
    })
    }
    
    // очистка инпута
    clearInput(){
        this.elementsControl.addNote.value = ''
    }

    // красный инпут
    redAlert(){
        this.elementsControl.addNote.style.borderColor = 'red'
    }

    // прозрачный инпут
    transparentBorder(){
        this.elementsControl.addNote.style.borderColor = 'transparent'
    }
    
    // удаление заметки
    deleteRend(deletedNote){
        deletedNote.remove();
    }
}