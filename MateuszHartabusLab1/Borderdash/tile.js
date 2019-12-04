// empty, sand, diamond, wall, stone

class Tile{
    constructor(type){
        if(!type){
            throw new Error('You must provide a Tile');
        }
        this.type = type;
        this.setSpritePosition(type);
    }

    setSpritePosition(type){
        this.spriteXPos = TileProperties[type].spriteXPos;
        this.spriteYPos = TileProperties[type].spriteYPos;
    }
}