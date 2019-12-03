class Filter{
    constructor(el, e){
        this.canvas = document.querySelector(`#${el}`);
        this.ctx = this.canvas.getContext('2d');
        this.height = this.canvas.height;
        this.width = this.canvas.width;
        this.info = e;
        this.blurRadius = 3;
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

        this.ctx.putImageData(canvasData, 0,0)
    }

    blueFilter(){
        const canvasData = this.ctx.getImageData(0,0, this.width, this.height);

        for(let i=0; i<canvasData.data.length;i+=4){
            canvasData.data[i+2] = this.info.target.value;
        }

        this.ctx.putImageData(canvasData, 0,0)
    }

    greenFilter(){
        const canvasData = this.ctx.getImageData(0,0, this.width, this.height);

        for(let i=0; i<canvasData.data.length;i+=4){
            canvasData.data[i+1]  = this.info.target.value;
        }

        this.ctx.putImageData(canvasData, 0,0)
    }

    gBlur(blur) {
		blur = blur || this.blurRadius;	
		let sum = 0;
		let delta = 5;
		let alpha_left = 1 / (2 * Math.PI * delta * delta);
		let step = blur < 3 ? 1 : 2;
		for (let y = -blur; y <= blur; y += step) {
			for (let x = -blur; x <= blur; x += step) {
				let weight = alpha_left * Math.exp(-(x * x + y * y) / (2 * delta * delta));
				sum += weight;
			}
		}
		let count = 0;
		for (let y = -blur; y <= blur; y += step) {
			for (let x = -blur; x <= blur; x += step) {
				count++;
				this.ctx.globalAlpha = alpha_left * Math.exp(-(x * x + y * y) / (2 * delta * delta)) / sum * blur;
				this.ctx.drawImage(this.canvas,x,y);
			}
		}
		this.ctx.globalAlpha = 1;
	}

    

    paintImage(e){
            const file = this.info.target.files[0];
            const  reader = new FileReader();
            const img = new Image();
            this.ctx.drawImage(img, 0, 0);
            
            reader.readAsDataURL(file);
            console.log(reader.result);
            img.src = reader.result;

    }
}