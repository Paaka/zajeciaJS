import {disactivateModal} from '../modal.js';
import {getTime} from "../date.js";
import Structure from "./generateItemsInNote.js"
import Colors from "../colors/colors.js";
import Pin from "../pins/pin.js"

class Note{
    constructor(){
        this.title = "Note without title";
        this.des = " ";
        this.time = getTime();
        this.style = "";
        this.Color = new Colors();
        this.Pin = new Pin();
        this.Structure = Structure;
    }

    getNote(){
        for(let i=0;i<localStorage.length;i++){
            const key =localStorage.key(i);
            const item = JSON.parse(localStorage.getItem(key));
            this.createElementForHtml(item, key);
            this.key = key;
            this.title = item.title;
            this.des = item.description;
            this.style =item.style;
            this.isPinned = item.isPinned;
        }
    }

    createElementForHtml(item, key){
        const note = new Structure().createForHtmlStructureNote(item ,key);
        if(item.isPinned){
            document.getElementById("notesPinned").appendChild(note);
        }else{
            document.getElementById("notes").appendChild(note);
        }
       
    }

    addNote(e){   
            e.preventDefault();
            const note = this.assignValuesToNote();
            const key = `note-${this.generateRandomKey()}`
            localStorage.setItem(key,JSON.stringify(note));
            this.createElementForHtml(note,key);
            disactivateModal();
    }
    setNoteColor(){
        const colorsArray = this.Color.checkState();
        const colorsObj = colorsArray[0].id;
        return colorsObj;
    }

    assignValuesToNote(){
        this.title = document.querySelector('#title').value;
        this.des = document.querySelector('#description').value;
        this.style = this.setNoteColor();
        this.isPinned = this.Pin.checkFormPinStateAndSetToDefault();
        this.Color.setStateToDefault();
        this.time = getTime();
        return {
            title: this.title,
            description: this.des,
            style:this.style,
            isPinned: this.isPinned,
            time: this.time,
        }
    }

    generateRandomKey(){
        const length = localStorage.length;
        const random = Math.floor(Math.random()*1000);
        return `${length}${random}`
    }
}

export default Note;

