document.addEventListener("DOMContentLoaded",appStart);

function appStart(){
    document
        .querySelector('#starterWrapper')
        .addEventListener('click',new Modal().activateModal)
    
    document
        .querySelector('#formClose')
        .addEventListener('click',new Modal().disactivateModal)

    document
        .querySelector('#mainForm')
        .addEventListener('onsubmit',(e)=> temporary(e))  

    document
        .querySelector('#formBtn')
        .addEventListener('click',(e)=> new Note().addNote(e))      
}


