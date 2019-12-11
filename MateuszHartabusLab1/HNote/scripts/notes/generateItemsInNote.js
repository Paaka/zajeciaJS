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
        const title = this.createHtmlStructureForNoteTitle(item.title,item);
        const description = this.createHtmlStructureForNoteParagraph(item.description)
        const time = this.createHtmlStructureForNoteTime(item.time)
        DIVnode.appendChild(title);
        DIVnode.appendChild(description);
        DIVnode.appendChild(time);
        DIVnode.appendChild(hover);
        DIVnode.classList =this.generateStyleOfNote(item);
        DIVnode.myKey = key;
        DIVnode.isPinned = item.isPinned;
        return DIVnode;
    }
    createHtmlStructureForNoteTime(time){
        const pNode = document.createElement("p");     
        const fullDescription = `Created ${time}`
        const textNode = document.createTextNode(fullDescription);     
        pNode.classList="notesItemTime"  
        pNode.appendChild(textNode);
        return pNode;
    }

    createHtmlStructureForNoteTitle(title, item){
        const h2Node = document.createElement("h2");
        const titleTextNode = document.createTextNode(title);
        h2Node.classList ="notesItemTitle";
        h2Node.appendChild(titleTextNode);
        h2Node.appendChild(this.CreateHtmlStructureForPin(item.isPinned));
        return h2Node;
    }

    CreateHtmlStructureForPin(item){
        const h2Node = document.createElement("Img");
        h2Node.classList ="pin2";
        h2Node.id="pinNote"
        if(item){
            h2Node.src = "./resources/icons/pin-full.svg"
        }else{
            h2Node.src = "./resources/icons/pin-empty.svg"
        }
    
        return h2Node;
    }

    createHtmlStructureForHover(){
        const hover = document.createElement("DIV");
        const signX = this.CreateHtmlStructureForClosure();
        const colorWrapper = this.CreateHtmlStructureForColorsWrapper();
        hover.classList ="notesItemParagraph";
        hover.appendChild(signX);
        hover.appendChild(colorWrapper);
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

    CreateHtmlStructureForColorsWrapper(){
        const DIVnode = document.createElement("DIV");
        const imgNode = this.CreateHtmlStructureForColorsPalette();
        const colorsParent = this.CreateHtmlStructureForColorsParent();
        DIVnode.classList ="example";
        DIVnode.appendChild(imgNode);
        DIVnode.appendChild(colorsParent);
        return DIVnode;
    }

    CreateHtmlStructureForColorsPalette(){
        const h2Node = document.createElement("Img");
        h2Node.classList ="palete2";
        h2Node.src = "./resources/icons/painter-palette.svg"
        return h2Node;
    }

    CreateHtmlStructureForColorsParent(){
        const DIVnode = document.createElement("DIV");
        DIVnode.classList ="palete2Content";
        DIVnode.id ="colorsParents";
        const white = this.CreateHtmlStructureForColorsParentItem("white");
        DIVnode.appendChild(white);
        const black = this.CreateHtmlStructureForColorsParentItem("dark");
        DIVnode.appendChild(black);
        const red = this.CreateHtmlStructureForColorsParentItem("red");
        DIVnode.appendChild(red);
        const green = this.CreateHtmlStructureForColorsParentItem("green");
        DIVnode.appendChild(green);
        const blue = this.CreateHtmlStructureForColorsParentItem("blue");
        DIVnode.appendChild(blue);
        return DIVnode;
    }

    CreateHtmlStructureForColorsParentItem(id){
        const DIVnode = document.createElement("DIV");
        DIVnode.classList ="palete2ContentItem "+id;
        const textNode= document.createTextNode(id);
        DIVnode.appendChild(textNode);
        DIVnode.id = id;
        return DIVnode;
    }
}

export default generateItemsInNote;