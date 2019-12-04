import  {activateModal, disactivateModal} from './modal.js';
import Color from './colors/colors.js'
import Note from './notes/note.js'
document.addEventListener("DOMContentLoaded",appStart);

function appStart(){
    new Note().getNote();

    document
        .querySelector('#starterWrapper')
        .addEventListener('click',activateModal)
    
    document
        .querySelector('#formClose')
        .addEventListener('click',disactivateModal)
 
    //Note listeners
    document
        .querySelector('#formBtn')
        .addEventListener('click',(e) => new Note().addNote(e)) 
    
    document
        .querySelector('#colorsParent')
        .addEventListener('click', (e)=>new Color().changeColor(e));
        
    document.querySelectorAll('.notesItem').forEach(item => {
        item.addEventListener('click', event => {
            if(event.path[0].id == "Closure"){
                const keyOfCurrentItem = event.path[2].myKey;
                localStorage.removeItem(keyOfCurrentItem);
                document.querySelector('#notes').removeChild(event.path[2]);
            }
        })
    })

    document.querySelectorAll('.notesItem').forEach(item => {
        console.log(item.querySelector('#textArea').value);
        item
        .querySelector('#textArea')
        .addEventListener('input', event => {
      
            if(event.path[0].id == "textArea"){
                const value = event.path[0].value;
                const keyOfCurrentItem = event.path[1].myKey;
                const getItem = JSON.parse(localStorage.getItem(keyOfCurrentItem));
                getItem.description = value;
                localStorage.setItem(keyOfCurrentItem,JSON.stringify(getItem));  
            }
        })
    })
}


