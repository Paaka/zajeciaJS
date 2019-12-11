import  {activateModal, disactivateModal} from './modal.js';
import {updateValue, deleteItem, updateColorOfNote, handlePinChange} from './eventFunctions.js';
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
        
    document
            .querySelectorAll('.notesItem')
            .forEach(item => {
               item
                    .querySelector('#colorsParents')
                    .addEventListener('click',updateColorOfNote);

                item
                    .querySelector('.pin2')
                    .addEventListener('click', handlePinChange);

                item
                    .querySelector('#textArea')
                    .addEventListener('input', updateValue )

                item.addEventListener('click', deleteItem);
                })


    const targetNode = document.getElementById('notes');
    const Pinned = document.getElementById('notesPinned');
    const config = { attributes: true, childList: true, subtree: true };

    const callback = function(mutationsList) {
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
            document.querySelectorAll('.notesItem').forEach(item => {
                   item
                    .querySelector('#colorsParents')
                    .addEventListener('click',updateColorOfNote);

                item
                    .querySelector('.pin2')
                    .addEventListener('click', handlePinChange);

                item
                    .querySelector('#textArea')
                    .addEventListener('input', updateValue )

                item.addEventListener('click', deleteItem);
        })
        }
    } 
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
    
    const observerForPinnedNotes = new MutationObserver(callback);
    observerForPinnedNotes.observe(Pinned, config);
}


