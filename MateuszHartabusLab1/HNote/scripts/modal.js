class Modal{
    
    activateModal(){
    this.style.display = "none";
    document.querySelector('#inputModal').style.display = "block";
    }

    disactivateModal(){
        document.querySelector('#inputModal').style.display = "none";
        document.querySelector('#starterWrapper').style.display = "block";
    }
}
