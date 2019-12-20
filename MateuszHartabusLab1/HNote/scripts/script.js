import  {activateModal, disactivateModal} from './modal.js';
import {updateValue, deleteItem, updateColorOfNote, handlePinChange,openTagModal} from './eventFunctions.js';
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
                    .querySelector('#pinNote')
                    .addEventListener('click', handlePinChange);

                item
                    .querySelector('#textArea')
                    .addEventListener('input', updateValue )

                item.addEventListener('click', deleteItem);

                item.querySelector('#tagIcon')
                .addEventListener('click',openTagModal)
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
                    .querySelector('#pinNote')
                    .addEventListener('click', handlePinChange);

                item
                    .querySelector('#textArea')
                    .addEventListener('input', updateValue )

                item.addEventListener('click', deleteItem);

                item.querySelector('#tagIcon')
                    .addEventListener('click',addTagToTheNote)
        })
        }
    } 
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
    
    const observerForPinnedNotes = new MutationObserver(callback);
    observerForPinnedNotes.observe(Pinned, config);

    

    function notifyMe() {
        if (!("Notification" in window)) {
          alert("This browser does not support system notifications");
        }
        else if (Notification.permission === "granted") {
          notify();
        }
        else if (Notification.permission !== 'denied') {
          Notification.requestPermission(function (permission) {
            if (permission === "granted") {
              notify();
            }
          });
        }
        
        function notify() {
           
          var notification = new Notification('TITLE OF NOTIFICATION', {
            body: "Hey! You are on notice!",
          });
          console.log(notification);
          notification.onclick = function () {
            window.open("http://127.0.0.1:5500/MateuszHartabusLab1/HNote/index.html");      
          };
          setTimeout(notification.close.bind(notification), 7000); 
        }
      
      }
      notifyMe();
}


