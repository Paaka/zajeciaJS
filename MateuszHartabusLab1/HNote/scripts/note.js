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
        const DIVnode = document.createElement("DIV");
        const h2Node = document.createElement("h2");
        const pNode = document.createElement("p");
        const titleTextNode = document.createTextNode(item.title);
        const desTextNode = document.createTextNode(item.description);
        h2Node.classList ="notesItemTitle";
        pNode.classList="notesItemPara"
        h2Node.appendChild(titleTextNode);
        pNode.appendChild(desTextNode);
        DIVnode.appendChild(h2Node);
        DIVnode.appendChild(pNode);
        DIVnode.classList ="notesItem";
        document.getElementById("notes").appendChild(DIVnode);
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