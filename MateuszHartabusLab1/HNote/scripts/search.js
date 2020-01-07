import Structure from './notes/generateItemsInNote.js';

class Search{
    constructor(){
        this.notes=[];
        this.getAllNotes();
        this.activateSearchOptions();
    }

    activateSearch(){
        this.toggleDefaultInterface('none','grid');
        this.activeLocalListeners();
    }

    activateSearchOptions(){
        this.activatePinnedItems();
        // activate color
    }

    activatePinnedItems(){
        const arrayOfNotes = this.getPinnedItems();
        const arrayOfUnpinnedNotes = this.getUnpinnedItems();
        if(arrayOfNotes.length >= 1){
            document.querySelector('#searchOptions').style.display = "grid";
            document.querySelector('#withPinImg').addEventListener('click',(e)=> this.genrateNotesFromArray(arrayOfNotes))
            document.querySelector('#withoutPinImg').addEventListener('click',(e)=> this.genrateNotesFromArray(arrayOfUnpinnedNotes))
        }
    }

    genrateNotesFromArray(arrayOfNotes){
        arrayOfNotes.forEach(note =>{
            const item = JSON.parse(localStorage.getItem(note.key));
            const noteDiv = new Structure().createForHtmlStructureNote(item, note.key);
            document.getElementById("searchNotes").appendChild(noteDiv);  
        })

        document.querySelector('#searchOptions').style.display = "none";
    }

    getPinnedItems(){
        const pinnedItems =  [];
        this.notes.forEach(note =>{
            if(note.isPinned === true){
                pinnedItems.push(note);
            }
        })
        return pinnedItems;
    }  

    getUnpinnedItems(){
        const pinnedItems =  [];
        this.notes.forEach(note =>{
            if(note.isPinned === false){
                pinnedItems.push(note);
            }
        })
        return pinnedItems;
    }  
    
    
     
    toggleDefaultInterface(state, searchDivState){
        document.querySelector('#notes').style.display = state;
        document.querySelector('#notesPinned').style.display = state;
        document.querySelector('.main').style.display = state;
        document.querySelector('#defaultNav').style.display = state;
        document.querySelector('#searchDiv').style.display = searchDivState;
        document.querySelector('#searchNotes').style.display = searchDivState;
    }

    getAllNotes(){  
        for(let i=0;i<localStorage.length;i++){
            const key =localStorage.key(i);
            const item = JSON.parse(localStorage.getItem(key));
            const note = { 
                            key: key,
                            description:item.description,
                            title: item.title,
                            tags: item.tag,
                            isPinned:item.isPinned
                         }
            this.notes.push(note);
        }
    }

    activeLocalListeners(){
        document.querySelector('.searchX').addEventListener('click',()=>{
            this.toggleDefaultInterface('grid','none');
        })
    
        document.querySelector('#searchInput').addEventListener('input',(e)=>this.searchValue(e))
    }

    searchValue(e){
        const value = e.target.value;
        this.clearSearchDiv();
        this.searchInDescrition(value);
        this.searchInTitle(value);
    }

    searchInDescrition(value){
        this.notes.forEach(obj =>{
            const postion = obj.description.search(value);
            if(postion > -1){
                const item = JSON.parse(localStorage.getItem(obj.key));
                const noteDiv = new Structure().createForHtmlStructureNote(item, obj.key);
                if(value.length > 0){
                    noteDiv.querySelector('.notesItemText').style.backgroundColor = 'yellow';
                    noteDiv.querySelector('.notesItemText').style.color = 'black';
                }
              document.getElementById("searchNotes").appendChild(noteDiv);     
            }
        })
    }

    searchInTitle(valueFromInput){
        this.notes.forEach((obj,i) =>{
            const postion = obj.title.search(valueFromInput);
            if(postion > -1){         
            const listOfNotesDiv = document.querySelectorAll('#searchNotes');
            const secondCondtion = this.checkIfThereIsNoteWithThisTitle(listOfNotesDiv, obj);
            console.log(secondCondtion);
                if(listOfNotesDiv.length >= 1){
                    for(let i=0;i<listOfNotesDiv.length;i++){
                        listOfNotesDiv[i].querySelector('.notesItemTitle').style.backgroundColor = 'yellow';
                        listOfNotesDiv[i].querySelector('.notesItemTitle').style.color = 'black';
                    }
                }else{
                   this.createNoteAndPutItIntoSearchNotesDiv(obj, valueFromInput)
                }
            }
        })
    }

    createNoteAndPutItIntoSearchNotesDiv(obj, value){
        const item = JSON.parse(localStorage.getItem(obj.key));
        const noteDiv = new Structure().createForHtmlStructureNote(item, obj.key);
        if(value.length > 0){
            noteDiv.querySelector('.notesItemTitle').style.backgroundColor = 'yellow';
            noteDiv.querySelector('.notesItemTitle').style.color = 'black';
        }
      document.getElementById("searchNotes").appendChild(noteDiv);
    }

    clearSearchDiv(){
        const allNotes = document.querySelectorAll('#searchNotes');
        const haveMinmumOneNote = 1;
        if(allNotes.length >= haveMinmumOneNote){
            document.querySelector('#searchNotes').innerHTML = ' ';
        }
    }

    checkIfThereIsNoteWithThisTitle(obj, xd){
        const lengthOfObj = obj.length;
        let valueOfH2;
        for(let i=0;i<lengthOfObj;i++){
            valueOfH2 = obj[i].querySelector('.notesItemTitle').textContent;
        }
        
        return xd.title === valueOfH2;
    }
    
}

export default Search;