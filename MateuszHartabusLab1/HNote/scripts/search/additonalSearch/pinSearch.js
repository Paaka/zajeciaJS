class PinSearch{
    constructor(array){
        this.Notes = array;
    }

    activateColorSearch(){
        console.log("deletdis")
        this.activateDOM();
    }

    activateDOM(){
        document.querySelector('#searchOptions').style.display="flex";
        
    }

    disactivateDOM(){
        document.querySelector('#searchOptions').style.display="none";
    }
}

export default PinSearch;