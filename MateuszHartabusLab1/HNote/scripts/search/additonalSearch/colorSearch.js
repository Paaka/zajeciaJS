import Structure from '../../notes/generateItemsInNote.js';

class ColorSearch{
    constructor(array){
        this.Notes = array;
        this.colorArray = [];
    }

    searchForColor(){
        this.Notes.forEach(element => {
            this.colorArray.push(element.color);
        });
        const arrayOfSingleColors = [...new Set(this.colorArray)];

        const numberOfColors = arrayOfSingleColors.length;
        if(numberOfColors > 1){
            this.activateDOM(arrayOfSingleColors);
        }
    }

   activateDOM(arrayOfColors){
        document.querySelector('#searchColor').style.display="flex";
        this.createCircleDivs(arrayOfColors);
        this.activateListners(arrayOfColors);
    }

    disactivateDOM(){
        document.querySelector('#searchOptions').style.display="none";
        document.querySelector('#searchColor').style.display="none";
        document.querySelector('.colorDivWrapper').innerHTML = " ";
    }

    createCircleDivs(array){
        const placeToPutNode = document.querySelector('.colorDivWrapper');
        array.forEach(value =>{
            const DIVnode = document.createElement("DIV");
            DIVnode.id = "colorCircle" + value;
            DIVnode.classList = "colorCircle " + value;
            placeToPutNode.appendChild(DIVnode);
        })
    }

    activateListners(array){
        array.forEach(item =>{
            document.querySelector('#colorCircle'+item).addEventListener('click', (e)=>this.displayThisColor(e))
        })
    }

    displayThisColor(e){
        const color = e.target.classList[1];
        this.Notes.forEach(item =>{
            if(item.color === color){  
                this.generateAndAppendNote(item);
            }
        })
        this.disactivateDOM();
    }

    generateAndAppendNote(item){
        const note = JSON.parse(localStorage.getItem(item.key));
        const noteDiv = new Structure().createForHtmlStructureNote(note, item.key);
        document.getElementById("searchNotes").appendChild(noteDiv);
    }

}


export default ColorSearch;