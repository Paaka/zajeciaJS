import {colorsState} from './stateOfColors.js';

function SearchForActive(item) {
    return item.active
}


class Colors {
    checkState(){
        const objToReturn = colorsState.filter(SearchForActive);
        this.setStateToDefault();
        return objToReturn;
    }

    setAllItemsInStateOfColorsToFalse(){
        colorsState.forEach(i=>{
            i.active = false;
        });
    }

    changeColor(e){
        if(e.target !== e.currentTarget){
            this.setAllItemsInStateOfColorsToFalse();
            this.chooseColor(e.target.id);
        }
        e.stopPropagation();
    }

    chooseColor(id){
        switch(id){
            case "white":{
                colorsState[0].active = true;
                break;
            }
            case "dark":{
                colorsState[1].active = true;
                break;
            }
            case "red":{
                colorsState[2].active = true;
                break;
            }
            case "green":{
                colorsState[3].active = true;
                break;
            }
            case "blue":{
                colorsState[4].active = true;
                break;
            }
        }
    }


    setStateToDefault(){
        this.setAllItemsInStateOfColorsToFalse();
        colorsState[0].active = true;
    }
}

export default Colors;