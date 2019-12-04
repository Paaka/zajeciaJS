class BoulderDash{
    constructor(canvasId){
        this.tiles = [];
        this.titleSize = 32;
        this.tileRows = 22;
        this.tileInRow = 40;
        this.initialiseCanvas(canvasId);
        this.generateLevel();
        this.render();   
    }

    render() {
        for(let y = 0; y < this.tilesRows; y++){
            const 
            for(let x = 0; x < this.tileInRow; x++){
    }

    initialiseCanvas(canvasId){
        if(!canvasId){
            throw new Error('You have to provide Canvas ID');
        }
        this.canvas = document.querySelector(`#${canvasId}`);
        this.ctx = this.canvas.getContext('2d');
    }
    

    generateLevel(){
        for(let y = 0; y < this.tilesRows; y++){
            const row = []
            console.log(row);
            for(let x = 0; x < this.tileInRow; x++){
                const rand = Math.floor(Math.random() *5);
                let  randTileType;
                switch (rand){
                    case 0:{
                        randTileType = TileProperties.empty.type;
                        break
                    } 
                    case 1:{
                        randTileType = TileProperties.sand.type;
                        break
                    }
                    case 2:{
                        randTileType = TileProperties.stone.type;
                        break
                    }
                    case 3:{
                        randTileType = TileProperties.diamond.type;
                        break
                    }
                    case 4:{
                        randTileType = TileProperties.wall.type;
                        break
                    }
                }
                console.log(rand);
                const tile =new Tile(randTileType);
                row.push(tile);
            }
            this.tiles.push(row);
        }
      
    }
}