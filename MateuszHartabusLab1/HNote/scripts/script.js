import  {activateModal, disactivateModal} from './modal.js';
import * as NoteFuctions from './eventFunctions.js';
import Search from './search.js'
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

    document
        .querySelector('#search')
        .addEventListener('click',(e)=> new Search().activateSearch(e))
 
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

    const allEventsOnNotes = (item) =>{

          item
               .querySelector('#colorsParents')
               .addEventListener('click', NoteFuctions.updateColorOfNote);
    
           item
               .querySelector('#pinNote')
               .addEventListener('click', NoteFuctions.handlePinChange);
    
           item
               .querySelector('#textArea')
               .addEventListener('input', NoteFuctions.updateValue )
    
           item.addEventListener('click', NoteFuctions.deleteItem);
    
           item.querySelector('.tagFormBtn')
               .addEventListener('click',NoteFuctions.addTag);
    
           if(item.querySelector('.notesTagsItem') !== null){
             item.querySelectorAll('.notesTagsItem').forEach(singleTag =>{
               singleTag.querySelector('.notesTagsX').addEventListener('click',NoteFuctions.deleteTag);
               })
             }
          
           }
        
    document
            .querySelectorAll('.notesItem')
            .forEach(item => allEventsOnNotes(item))


    

    const targetNode = document.getElementById('notes');
    const Pinned = document.getElementById('notesPinned');
    const config = { attributes: true, childList: true, subtree: true };

    const callback = function(mutationsList) {
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
            document.querySelectorAll('.notesItem').forEach(item => allEventsOnNotes(item));
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


