class Background{
    constructor(event){
        this.canvas = document.querySelector(`#canvas`);
        this.ctx = this.canvas.getContext('2d');
        this.event = event;
    }


    drawBackground(){
        const image = new Image();
        image.src = this.chooseImage(this.event.target.id);
        image.addEventListener('load', ()=>{
            this.ctx.drawImage(image,0,0);
        })
    }

    chooseImage(id){
        switch(id){
            case "imageOne":{
                return "./img/autumn.jpg";
            }
            case "imageTwo":{
                return "./img/road.jpg"
            }
            case "imageThree":{
                return "./img/sky.png"
            }
            case "imageFour":{
                return "./img/river.jpg"
            }
            default :{
                return "./img/autumn.jpg";
            }
        }
    }
}