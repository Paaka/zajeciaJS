import {pinState} from './pinState.js';

class Pin{
    constructor(){
        this.srcActive = './resources/icons/pin-full.svg';
        this.srcUnActive = './resources/icons/pin-empty.svg';
        this.image = document.querySelector('#pin');
    }

    togglePinState(e){
        pinState.isActive = !pinState.isActive;
        if(pinState.isActive){
            e.target.src =this.srcActive;
        }else{
            e.target.src =this.srcUnActive;
        }
    }

    checkFormPinStateAndSetToDefault(){
        const state = pinState.isActive;
        pinState.isActive = false;
        this.image.src = this.srcUnActive;
        return state;
    }


}



export default Pin;