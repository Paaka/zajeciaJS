document.addEventListener("DOMContentLoaded",appStart);

function appStart(){
    document
        .querySelector('#starterWrapper')
        .addEventListener('click',activateModal)
}

function activateModal(e){
    this.style.display = "none";
    console.log(document.querySelector('#mainInput'))
    document.querySelector('#inputModal').style.display = "block";
}