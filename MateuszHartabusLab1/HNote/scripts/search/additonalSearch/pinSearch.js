import Structure from '../../notes/generateItemsInNote.js';

class PinSearch{
    constructor(array){
        this.Notes = array;
        this.items = [];
        this.unPinnedItems = [];
        this.sortNotes();
        this.addEvents();
    }

    sortNotes(){
        this.Notes.forEach(note =>{
            if(note.isPinned === true){
                this.items.push(note);
            }else{
                this.unPinnedItems.push(note);
            }
        })
    } 
     

    clearSearchDiv(){
        document.querySelector('#searchNotes').innerHTML = ' ';
    }

    activateDOM(){
        document.querySelector('#searchOptions').style.display="grid"; 
    }

    disactivateDOM(){
        document.querySelector('#searchOptions').style.display="none";
        document.querySelector('#withPinImg').removeEventListener('click', this.genrateNotesFromArray);
        document.querySelector('#withoutPinImg').removeEventListener('click', this.genrateNotesFromArray);
    }

    addEvents(){
        this.clearSearchDiv();
        if(this.items.length >= 1){
            document.querySelector('#withPinImg').addEventListener('click',()=> this.genrateNotesFromArray(this.items), false)
            document.querySelector('#withoutPinImg').addEventListener('click',()=> this.genrateNotesFromArray(this.unPinnedItems), false)
        }
    }

    genrateNotesFromArray(arrayOfNotes){
       this.clearSearchDiv();
        arrayOfNotes.forEach(note =>{
            const item = JSON.parse(localStorage.getItem(note.key));
            const noteDiv = new Structure().createForHtmlStructureNote(item, note.key);
            document.getElementById("searchNotes").appendChild(noteDiv);  
        })

        this.disactivateDOM();
    }
}

export default PinSearch;