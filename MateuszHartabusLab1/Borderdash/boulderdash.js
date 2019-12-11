class BoulderDash{
    constructor(canvasId){
        this.tiles = [];
        this.tileSize = 32;
        this.tileRows = 22;
        this.tileInRow = 40;
        this.initialiseCanvas(canvasId);
        this.generateLevel();
        this.loadSptite(); 
    }

    

    render() {
        for (let y = 0; y < this.tileRows; y++) {
            const yPos = y * this.tileSize
            for (let x = 0; x < this.tileInRow; x++) {
              const tile = this.tiles[y][x]
              const xPos = x * this.tileSize
              console.log(x);
              this.ctx.drawImage(
                this.tilesSprite,
                tile.spriteXPos,
                tile.spriteYPos,
                this.tileSize,
                this.tileSize,
                xPos,
                yPos,
                this.tileSize,
                this.tileSize,
              )
            }
          }
    }

    loadSptite(){
        this.tilesSprite = new Image();
        this.tilesSprite.src = './sprites.png';
        this.tilesSprite.onload = () =>{
            this.render();
        }
    }

    initialiseCanvas(canvasId){
        if(!canvasId){
            throw new Error('You have to provide Canvas ID');
        }
        this.canvas = document.querySelector(`#${canvasId}`);
        this.ctx = this.canvas.getContext('2d');
    }
    

    generateLevel(){
        for (let y = 0; y < this.tileRows; y++) {
            const row = []
            for (let x = 0; x < this.tileInRow; x++) {
              const rand = Math.floor(Math.random() * 100)
              let randTileType
              if(rand < 15){
                  randTileType = TileProperties.empty.type
              }else if(rand <55){
                randTileType = TileProperties.sand.type
              }else if(rand <75){
                randTileType = TileProperties.stone.type
              }else if(rand <90){
                randTileType = TileProperties.wall.type
              } else{
                randTileType = TileProperties.diamond.type
              }
              
              const tile = new Tile(randTileType)
              row.push(tile)
            }
            this.tiles.push(row)
          }
    }
    

    initalizeMiner(){
        this.miner = new Miner();
        this.tiles[0][0] = this.miner;  
    }
}