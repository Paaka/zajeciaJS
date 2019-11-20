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
                    break;
                }else{
                    this.removeModal('.inputBrushesModal')
                    break;
                }
            }
            case "modalColors":{
                const checkIfThisClassExists = document.querySelector(".inputColorsModal.show");
                if(checkIfThisClassExists === null){
                    this.showModal('.inputColorsModal')
                    break;
                }else{
                    this.removeModal('.inputColorsModal')
                    break;
                }
            }
            case "modalImages":{
                const checkIfThisClassExists = document.querySelector(".inputImagesModal.show");
                if(checkIfThisClassExists === null){
                    this.showModal('.inputImagesModal')
                    break;
                }else{
                    this.removeModal('.inputImagesModal')
                    break;
                }
            }
            case "modalFilters":{
                const checkIfThisClassExists = document.querySelector(".inputFiltersModal.show");
                if(checkIfThisClassExists === null){
                    this.showModal('.inputFiltersModal')
                    break;
                }else{
                    this.removeModal('.inputFiltersModal')
                    break;
                }
            }
        }
    }


}