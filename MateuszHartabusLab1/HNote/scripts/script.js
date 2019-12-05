import  {activateModal, disactivateModal} from './modal.js';
import {updateValue, deleteItem} from './eventFunctions.js';
import Color from './colors/colors.js'
import Note from './notes/note.js'
import Pin from './pins/pin.js';
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
    
    document
        .querySelector('#pin')
        .addEventListener('click', (e)=>new Pin().togglePinState(e));


const targetNode = document.getElementById('notes');
const config = { attributes: true, childList: true, subtree: true };

const callback = function(mutationsList) {

    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            document.querySelectorAll('.notesItem').forEach(item => {
                item.addEventListener('click', deleteItem)
            })

            document.querySelectorAll('.notesItem').forEach(item => {
                item
                .querySelector('#textArea')
                .addEventListener('input', updateValue)
            })
        }
    }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);
        
  document.querySelectorAll('.notesItem').forEach(item => {
        item.addEventListener('click', deleteItem);
    })

    document
        .querySelectorAll('.notesItem')
        .forEach(item => {
            item
                .querySelector('#textArea')
                .addEventListener('input', updateValue )
            })
}


