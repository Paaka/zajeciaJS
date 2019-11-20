class Modal {
    constructor(event){
        this.e = event;
        this.id = this.e.target.id;

        this.stateOfModals = {
            brushesModalState : false,
        }
    }

    activateModal(){
        this.chooseModal(this.id);
    }

    showModal(input){
        document
            .querySelector(input)
            .classList.add("show");
    }

    removeModal(input){
        document
            .querySelector(input).classList.remove("show")
    }

    chooseModal(id){
        switch(id){
            case "modalBrushes":{
                const checkIfThisClassExists = document.querySelector(".inputBrushesModal.show");
                if(checkIfThisClassExists === null){
                    this.showModal('.inputBrushesModal')
                }else{
                    this.removeModal('.inputBrushesModal')
                }
            }
        }
    }


}