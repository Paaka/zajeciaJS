import  {activateModal, disactivateModal} from './modal.js';
import Color from './colors/colors.js'
import Note from './note.js'
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
        .addEventListener('click', (e)=>new Color().changeColor(e))    
    
        document.querySelectorAll('.notesItem').forEach(item => {
            item.addEventListener('click', event => {
              console.log(event.composedPath()[0]);
              
            })
          })
}


