export const activateModal  = function(){
    document.querySelector('#starterWrapper').style.display = "none";
    document.querySelector('#inputModal').style.display = "block";
    }

export const  disactivateModal = function (){
        document.querySelector('#inputModal').style.display = "none";
        document.querySelector('#starterWrapper').style.display = "block";
        document.querySelector('#mainForm').className = "form ";
        document.querySelector('#mainForm').reset();
    }

