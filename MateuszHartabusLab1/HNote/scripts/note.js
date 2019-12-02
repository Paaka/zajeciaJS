import {disactivateModal} from './modal.js';
import {getTime} from "./date.js";

class Note{
    constructor(title = "Note without title"){
        this.title = title;
        this.des = " ";
        this.time = getTime();
    }

    getNote(){
        for(let i=0;i<localStorage.length;i++){
            const key =localStorage.key(i);
            const item = JSON.parse(localStorage.getItem(key));
            this.createElementForHtml(item);
        }
    }

    createElementForHtml(item){
        const note = this.createForHtmlStructureNote(item);
        document.getElementById("notes").appendChild(note);
    }

    createForHtmlStructureNote(item){
        const DIVnode = document.createElement("DIV");
        const title = this.createHtmlStructureForNoteTitle(item.title);
        const description = this.createHtmlStructureForNoteParagraph(item.description)
        DIVnode.appendChild(title);
        DIVnode.appendChild(description);
        DIVnode.classList ="notesItem";
        return DIVnode;
    }

    createHtmlStructureForNoteTitle(title){
        const h2Node = document.createElement("h2");
        const titleTextNode = document.createTextNode(title);
        h2Node.classList ="notesItemTitle";
        h2Node.appendChild(titleTextNode);
        return h2Node;
    }

    createHtmlStructureForNoteParagraph(description){
        const pNode = document.createElement("p");     
        const desTextNode = document.createTextNode(description);     
        pNode.classList="notesItemPara"  
        pNode.appendChild(desTextNode);
        return  pNode;
    }

    addNote(e){   
            e.preventDefault();
            const note = this.assignValuesToNote();
            localStorage.setItem(`note-${this.generateRandomKey()}`,JSON.stringify(note));
            this.updateNote(note)
            disactivateModal();
    }

    updateNote(item){
        this.createElementForHtml(item);
    }

    assignValuesToNote(){
        console.log(this.time)
        this.title = document.querySelector('#title').value;
        this.des = document.querySelector('#description').value;
        return {
            title: this.title,
            description: this.des,
        }
    }

    generateRandomKey(){
        const length = localStorage.length;
        const random = Math.floor(Math.random()*1000);
        return `${length}${random}`
    }
}

export default Note;