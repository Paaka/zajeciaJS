import {colorsState} from './stateOfColors.js';

function SearchForActive(item) {
    return item.active
}

class Colors {
    checkState(){
        const objToReturn = colorsState.filter(SearchForActive);
        return objToReturn;
    }
}

export default Colors;