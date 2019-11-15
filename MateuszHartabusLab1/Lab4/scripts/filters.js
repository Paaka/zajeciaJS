class Filter{
    constructor(el, e){
        this.canvas = document.querySelector(`#${el}`);
        this.ctx = this.canvas.getContext('2d');
        this.height = this.canvas.height;
        this.width = this.canvas.width;
        this.info = e;
        //

        this.red = 0;
    }

    chooseFilter(){

        console.log(this.info.target.id);
        if(this.info.target !== this.info.currentTarget){ //btn różny od parenta
            switch(this.info.target.id){
                case 'darken':{
                    this.darkenFilter();
                    break;
                }
                case 'lighter':{
                    this.lighterFilter();
                    break;
                }
                case 'inputRed':{
                    this.redFilter();
                    break;
                }
                case 'moreGreen':{
                    this.greenFilter();
                    break;
                }
                case 'moreBlue':{
                    this.blueFilter();
                    break;
                }
            }
        }
        this.info.stopPropagation();
    }
    
    darkenFilter(amount = 30){

        const canvasData = this.ctx.getImageData(0,0, this.width, this.height);

        for(let i=0; i<canvasData.data.length;i+=4){
            canvasData.data[i] -= amount;
            canvasData.data[i+1] -= amount;
            canvasData.data[i+2] -= amount;
        }

        this.ctx.putImageData(canvasData, 0,0)
    }

    lighterFilter(amount = 30){
        
        const canvasData = this.ctx.getImageData(0,0, this.width, this.height);

        for(let i=0; i<canvasData.data.length;i+=4){
            canvasData.data[i] += amount;
            canvasData.data[i+1] += amount;
            canvasData.data[i+2] += amount;
        }

        this.ctx.putImageData(canvasData, 0,0)
    }

    redFilter(){
        const canvasData = this.ctx.getImageData(0,0, this.width, this.height);

        for(let i=0; i<canvasData.data.length;i+=4){
           this.red = this.info.target.value;
          canvasData.data[i] = this.info.target.value;
        }
        console.log(this.info.target.value);

        this.ctx.putImageData(canvasData, 0,0)
    }

    blueFilter(amount = 20){
        const canvasData = this.ctx.getImageData(0,0, this.width, this.height);

        for(let i=0; i<canvasData.data.length;i+=4){
            canvasData.data[i+2] += amount;
        }

        this.ctx.putImageData(canvasData, 0,0)
    }

    greenFilter(amount = 20){
        const canvasData = this.ctx.getImageData(0,0, this.width, this.height);

        for(let i=0; i<canvasData.data.length;i+=4){
            canvasData.data[i+1] += amount;
        }

        this.ctx.putImageData(canvasData, 0,0)
    }
}