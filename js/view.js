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
        <button class="btn btn--item trash" >
        <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-trash">
        <path d="M28 40H11.8C8.50002 40 5.90002 37.3 5.90002 34.1V16C5.90002 15.4 6.30002 15 6.90002 15C7.50002 15 7.90002 15.4 7.90002 16V34.1C7.90002 36.3 9.70002 38 11.8 38H28C30.2 38 31.9 36.2 31.9 34.1V16C31.9 15.4 32.3 15 32.9 15C33.5 15 33.9 15.4 33.9 16V34.1C33.9 37.3 31.2 40 28 40Z" fill="black"/>
        <path d="M33.3 4.9H25.7C25.2 2.1 22.8 0 19.9 0C17 0 14.6 2.1 14.1 4.9H6.50002C4.20002 4.9 2.40002 6.7 2.40002 9C2.40002 11.3 4.20002 13 6.50002 13H33.4C35.7 13 37.5 11.2 37.5 8.9C37.5 6.6 35.6 4.9 33.3 4.9ZM19.9 2C21.7 2 23.2 3.2 23.6 4.9H16.1C16.6 3.2 18.1 2 19.9 2ZM33.3 11H6.50002C5.40002 11 4.40002 10.1 4.40002 8.9C4.40002 7.8 5.30002 6.8 6.50002 6.8H33.4C34.5 6.8 35.5 7.7 35.5 8.9C35.4 10.1 34.5 11 33.3 11Z" fill="black"/>
        <path d="M12.9 35.1C12.3 35.1 11.9 34.7 11.9 34.1V17.4C11.9 16.8 12.3 16.4 12.9 16.4C13.5 16.4 13.9 16.8 13.9 17.4V34.1C13.9 34.6 13.4 35.1 12.9 35.1Z" fill="black"/>
        <path d="M26.9 35.1C26.3 35.1 25.9 34.7 25.9 34.1V17.4C25.9 16.8 26.3 16.4 26.9 16.4C27.5 16.4 27.9 16.8 27.9 17.4V34.1C27.9 34.6 27.4 35.1 26.9 35.1Z" fill="black"/>
        <path d="M19.9 35.1C19.3 35.1 18.9 34.7 18.9 34.1V17.4C18.9 16.8 19.3 16.4 19.9 16.4C20.5 16.4 20.9 16.8 20.9 17.4V34.1C20.9 34.6 20.4 35.1 19.9 35.1Z" fill="black"/>
        </svg>
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
}