import {pinState} from './pinState.js';

class Pin{
    constructor(){
        this.srcActive = './resources/icons/pin-full.svg';
        this.srcUnActive = './resources/icons/pin-empty.svg';
    }

    togglePinState(e){
        pinState.isActive = !pinState.isActive;
        console.log(pinState.isActive);
        if(pinState.isActive){
            e.target.src =this.srcActive;
        }else{
            e.target.src =this.srcUnActive;
        }
    }


}



export default Pin;