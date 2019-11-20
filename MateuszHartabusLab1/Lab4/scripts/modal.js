class Modal {
    constructor(event){
        this.e = event;
        this.id = this.e.target.id;
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

    activateModal(str){
        const classNameWithoutShow = str.slice(0,-5);
        const checkIfThisClassExists = document.querySelector(str);
        if(checkIfThisClassExists === null){
            this.showModal(classNameWithoutShow)
        }else{
            this.removeModal(classNameWithoutShow)
        }
    }

    chooseModal(){
          if(this.e.target !== this.e.currentTarget){ //btn różny od parenta
            switch(this.e.target.id){
                case "modalBrushes":{
                    this.activateModal(".inputBrushesModal.show")
                    break;
                }
                case "modalColors":{
                    this.activateModal(".inputColorsModal.show")
                    break;
                }
                case "modalImages":{    
                    this.activateModal(".inputImagesModal.show")
                    break;
                }
                case "modalFilters":{
                    this.activateModal(".inputFiltersModal.show")
                    break;
                }
            } 
        }
    }


}