class Background{
    constructor(event){
        this.canvas = document.querySelector(`#canvas`);
        this.ctx = this.canvas.getContext('2d');
        this.event = event;
    }

    chooseBackround(){
        if(this.event.target !== this.event.currentTarget){ //btn różny od parenta
            switch(this.event.target.id){
                case "imageOne":{
                    const src = "./img/autumn.jpg";
                    this.drawBackground(src);
                    break;
                }
                case "imageTwo":{
                    const src = "./img/road.jpg"
                    this.drawBackground(src);
                    break;
                }
                case "imageThree":{
                    const src = "./img/sky.png";
                    this.drawBackground(src);
                    break;
                }
                case "imageFour":{
                    const src = "./img/river.jpg";
                    this.drawBackground(src);
                    break;
                }
                default :{
                    return "./img/autumn.jpg";
                }
            }
            
        }
        this.event.stopPropagation();
    }


    drawBackground(source){
        const image = new Image();
        image.src = source;
        image.addEventListener('load', ()=>{
            this.ctx.drawImage(image,0,0);
        })
    }

}