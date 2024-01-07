class Bike{
    constructor(color, htmlObj){
        this.color = color
        this.theBikeItself = htmlObj
    }
    leaveMark(){

    }
    turbo(){

    }
}
const GRID = document.querySelector("#grid")
function fillGrid(){
    for(let i = 0; i < 121; i++){
        let tile = document.createElement("div")
        tile.className = "gridTile"
        GRID.appendChild(tile)
    }
}
fillGrid()
// let player1 = new Bike("lightskyblue", )
