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
        document
            .querySelector('.searchX')
            .addEventListener('click',()=>{
                this.toggleDefaultInterface('grid','none');
                this.hideAdditonalSearch();
            })

        document
            .querySelector('#searchInput')
            .addEventListener('input',(e)=>this.searchValue(e))
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
    }

    chooseSearch(item, value){
        switch(item){
            case "everywhere":{
                this.searchEverywhere(value);
                break;
            }
            case "titles":{
                this.searchValueInNote(value,"title")
                break;
            }
            case "description":{
                this.searchValueInNote(value,"description");
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
                this.createNote(obj);
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

    searchValueInNote(value, type){
        this.notes.forEach(obj =>{
            const postion = obj[type].search(value);
            if(postion > -1){
                this.createNote(obj)   
            }
        })
    }

    searchInTags(inputValue){
        this.notes.forEach(note =>{
            const position =this.getPostionFromTags(note, inputValue)
            if(position > 0){         
                this.createNote(note);
            }
        })
    }

    getPostionFromTags(obj, input){
        const tag = this.getTagsFromNote(obj.tags);
        let position = 0; 
        tag.forEach(item =>{
             if(item.search(input) >=0){
                 if(item.search(input) === 0){
                     position++;
                 }
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

    clearSearchDiv(){
        const allNotes = document.querySelectorAll('#searchNotes');
        const haveMinmumOneNote = 1;
        if(allNotes.length >= haveMinmumOneNote){
            document.querySelector('#searchNotes').innerHTML = ' ';
        }
    }

     convertTagStringToArray(string){
        if(string !== undefined){
            const arrayOfsingleStrings =string.split(";");
            return arrayOfsingleStrings;
        }
        return null;
    }

    createNote(obj){
        const item = JSON.parse(localStorage.getItem(obj.key));
        item.tags = this.convertTagStringToArray(item.tag);
        const noteDiv = new Structure().createForHtmlStructureNote(item, obj.key);
        document.getElementById("searchNotes").appendChild(noteDiv);
    }
}

export default Search;