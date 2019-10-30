class Brush {
    constructor(shape) {
        this.shape = shape;
        this.brush = document.createElement('div');
        this.styleBrush();
    }

    getBrush() {
        return this.brush;
    }

    styleBrush(){
        const className = this.shape + '-brush'
        const div = this.brush.classList.add('brush', className)
        return div;
    } 
    
}