import Structure from '../notes/generateItemsInNote.js';
import ColorSearch from './additonalSearch/colorSearch.js';
import PinSearch from "./additonalSearch/pinSearch.js";

class Search{
    constructor(){
        this.notes=[];
        this.getAllNotes();
        this.ColorSearch = new ColorSearch(this.notes);
        this.ColorSearch.searchForColor();
        this.PinSearch = new PinSearch(this.notes);
        this.PinSearch.activateDOM();
    }

    activateSearch(){
        this.toggleDefaultInterface('none','grid');
        this.activeLocalListeners();
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
                            isPinned:item.isPinned,
                            color: item.style,
                            tag:item.tagg
                         }
            this.notes.push(note);
        }
    }

    activeLocalListeners(){
        document.querySelector('.searchX').addEventListener('click',()=>{
            this.toggleDefaultInterface('grid','none');
            this.hideAdditonalSearch();
        })
    
        document.querySelector('#searchInput').addEventListener('input',(e)=>this.searchValue(e))
    }

    searchValue(e){
        const value = e.target.value;
        if(value.length > 0){
            const checked = this.checkWhichOneIsChecked();
            this.hideAdditonalSearch();
            this.clearSearchDiv();
            this.chooseSearch(checked,value);
        }else{
            document.querySelector('#searchNotes').innerHTML = ' ';
        }
        
        // this.searchInDescrition(value);
        
    }

    chooseSearch(item, value){
        switch(item){
            case "everywhere":{
                this.searchEverywhere(value);
                break;
            }
            case "titles":{
                this.searchInTitle(value);
                break;
            }
            case "description":{
                this.searchInDescrition(value);
                break;
            }
            case "tags":{
                this.searchInTags(value);
                break;
            }
        }
    }

    searchEverywhere(inputValue){
        this.notes.forEach((obj )=>{
            const title = obj.title.search(inputValue);
            const description = obj.description.search(inputValue);
            const tag = this.getPostionFromTags(obj, inputValue);
            if(title > -1 || description > -1 || tag > 0){
                const item = JSON.parse(localStorage.getItem(obj.key));
                item.tags = this.convertTagStringToArray(item.tag);
                const noteDiv = new Structure().createForHtmlStructureNote(item, obj.key);
                document.getElementById("searchNotes").appendChild(noteDiv);
            }
        })
        
    }

    checkWhichOneIsChecked(){
        let checkedValue;
        const arrayOfRadioInputs = [
            {label : "everywhere", checked: document.querySelector('#searchEverywhere').checked},
            {label : "titles", checked: document.querySelector('#searchTitleRadio').checked},
            {label : "description", checked: document.querySelector('#searchDescriptionRadio').checked},
            {label : "tags", checked: document.querySelector('#searchTagsRadio').checked},
        ]
        
        arrayOfRadioInputs.forEach(obj =>{
            if(obj.checked == true){
                checkedValue = obj.label;
            }
        })
        return checkedValue;
    }

   hideAdditonalSearch(){
        this.ColorSearch.disactivateDOM();
        this.PinSearch.disactivateDOM();
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
            console.log(listOfNotesDiv.length);
                if(listOfNotesDiv.length > 1){
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

    searchInTags(inputValue){
        this.notes.forEach(note =>{
           if(typeof(note.tags) === "string"){
                const tagsArray = note.tags.split(";");
                this.searchInArrayIfHaveThisValue(tagsArray,inputValue, note)
           }
        })
    }

    getPostionFromTags(obj, input){
        const tag = this.getTagsFromNote(obj.tags);
        let position = 0;
        tag.forEach(item =>{
             if(item.search(input) >=1){
                position += item.search(input);
             }
        })
        return position;
    }

    getTagsFromNote(item){
       if(typeof(item) === "string"){
            const array = [...item.split(';')];
            return array;
       }else return [];
    }

    searchInArrayIfHaveThisValue(array, inputValue, note){
        array.forEach(item =>{
            const position = item.search(inputValue);
            if(position > -1){
                const item = JSON.parse(localStorage.getItem(note.key));
                const noteDiv = new Structure().createForHtmlStructureNote(item, note.key);
                document.getElementById("searchNotes").appendChild(noteDiv);    
            }
            
        })
    }

    createNoteAndPutItIntoSearchNotesDiv(obj, value){
        console.log('createNoteAndIn')
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

    convertTagStringToArray(string){
        if(string !== undefined){
            const arrayOfsingleStrings =string.split(";");
            return arrayOfsingleStrings;
        }
        return null;
    }
}

export default Search;