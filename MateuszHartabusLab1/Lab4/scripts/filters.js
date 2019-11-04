class Filter{
    constructor(el){
        this.canvas = document.querySelector(`#${el}`);
        this.ctx = this.canvas.getContext('2d');
        this.height = this.canvas.height;
        this.width = this.canvas.width;
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
}