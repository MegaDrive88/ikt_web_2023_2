class Game{
    static turboGenNeeded = true
    static GRID = document.querySelector("#grid")
    static fillGrid(){
        for(let i = 0; i < 121; i++){
            let tile = document.createElement("div")
            tile.className = "gridTile"
            this.GRID.appendChild(tile)
        }
    }
    static delay(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds)
        })
    }
    static async Start(player1, player2){
        player1.Start()
        player2.Start()
    }
    static randint(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}
export default Game