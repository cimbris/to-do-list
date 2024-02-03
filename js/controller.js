import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View(model.allNotesMassive);

// поиск элемента в list__text по значению инпута , привод к нижнему регистру
view.elementsControl.search.addEventListener('input',(event)=>{
    let searchValue = event.target.value.toLowerCase();   
    const list = view.elementsControl.list.querySelectorAll('.list__text');
    view.filterNotes(searchValue, list);
})

// рендер заметки при клике на кнопку если значение инпута >0
view.elementsControl.btn.addEventListener('click', function(event){
    event.preventDefault();
    if (view.elementsControl.addNote.value.trim().length > 0){
        const newNote = model.addNote(view.elementsControl.addNote.value);
        view.noteRender(newNote)
        view.clearInput()

    } else {
        view.redAlert()
    }
})

// изменение цвета инпута
view.elementsControl.addNote.addEventListener('input', () => {
    if (view.elementsControl.addNote.style.borderColor === 'red') {
        view.transparentBorder();
    }
})

// удаление заметки
view.elementsControl.list.addEventListener('click', (event) => {
    if (event.target.classList.contains('trash')){
        model.arrDel(event.target.previousElementSibling.textContent)
        view.deleteRend(event.target.closest('.list__item'));
    }
})