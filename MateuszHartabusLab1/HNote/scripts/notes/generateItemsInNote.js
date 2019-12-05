class generateItemsInNote{
    generateStyleOfNote(item){  
        let additionalStyle = "";
        if(item.style != undefined || item.style == "white"){
            additionalStyle = item.style;
        }
           
        return "notesItem " + additionalStyle;
    }

    createForHtmlStructureNote(item, key){
        const DIVnode = document.createElement("DIV");
        const hover = this.createHtmlStructureForHover();
        const title = this.createHtmlStructureForNoteTitle(item.title);
        const description = this.createHtmlStructureForNoteParagraph(item.description)
        DIVnode.appendChild(title);
        DIVnode.appendChild(description);
        DIVnode.appendChild(hover);
        DIVnode.classList =this.generateStyleOfNote(item);
        DIVnode.myKey = key;
        DIVnode.isPinned = item.isPinned;
        return DIVnode;
    }

    createHtmlStructureForNoteTitle(title){
        const h2Node = document.createElement("h2");
        const titleTextNode = document.createTextNode(title);
        h2Node.classList ="notesItemTitle";
        h2Node.appendChild(titleTextNode);
        return h2Node;
    }

    createHtmlStructureForHover(){
        const hover = document.createElement("DIV");
        const signX = this.CreateHtmlStructureForClosure();
        hover.classList ="notesItemParagraph";
        hover.appendChild(signX);
        return hover;
    }

    createHtmlStructureForNoteParagraph(description){
        const pNode = document.createElement("textarea");     
        pNode.value = description;
        //const desTextNode = document.createTextNode(description);     
        pNode.classList="notesItemText"  
        pNode.id="textArea" 
      
        return  pNode;
    }

    CreateHtmlStructureForClosure(){
        const X = document.createElement("span");
        const titleTextNode = document.createTextNode("×");
        X.id = "Closure"
        X.classList ="notesItemParagraphClosure";
        X.appendChild(titleTextNode);
        return X;
    }
}

export default generateItemsInNote;