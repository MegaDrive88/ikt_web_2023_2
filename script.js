import Biker from "./Biker.js"
import Game from "./Game.js"

Game.fillGrid()
const blueBike = document.querySelector('#blue')
const oranBike = document.querySelector('#orange')
const blueTurboBar = document.querySelector("#blueTurbo")
const oranTurboBar = document.querySelector("#oranTurbo")
const player1 = new Biker("blue", blueBike, blueTurboBar)
const player2 = new Biker("oran", oranBike, oranTurboBar)
Game.Start(player1, player2)
let blue_dir = "right"
let orange_dir = "left"
let bVert = false
let oVert = false
// Blue
document.addEventListener("keypress", async (e)=>{    
    player1.turn()
    player1.stopDir[blue_dir] = true
    switch(e.key){
        case 'w':
        case 'W':
            if(!bVert) blue_dir = "up"
            else {
                player1.stopDir[blue_dir] = false
                return
            }
            bVert = true
            break
        case 'd':
        case 'D':
            if(bVert) blue_dir = "right"
            else {
                player1.stopDir[blue_dir] = false
                return
            }
            bVert = false
            break
        case 'a':
        case 'A':
            if(bVert) blue_dir = "left"
            else {
                player1.stopDir[blue_dir] = false
                return
            }
            bVert = false
            break
        case 's':
        case 'S':
            if(!bVert) blue_dir = "down"
            else {
                player1.stopDir[blue_dir] = false
                return
            }
            bVert = true
            break
        case 'e':
        case 'E':
            if (player1.turboCount > 0){
                if (Game.turboGenNeeded){
                    Biker.turboGen()
                    Game.turboGenNeeded = false
                }
                player1.move(blue_dir, 2)
                player1.stopDir[blue_dir] = false
                player1.turboCount--
                player1.turboBar.innerText = "█".repeat(player1.turboCount)
            }
            else{
                player1.stopDir[blue_dir] = false
                return
            }
            break
        case 'q':
        case 'Q':
            await player1.jump(blue_dir)
            player1.stopDir[blue_dir] = false
            break
        default:
            player1.stopDir[blue_dir] = false
            return
    }
    player1.move(blue_dir, 1)
})
// Orange
document.addEventListener("keypress", async (e)=>{
    player2.turn()
    player2.stopDir[orange_dir] = true
    switch(e.key){
        case 'i':
        case 'I':
            if(!oVert) orange_dir = "up"
            else {
                player2.stopDir[orange_dir] = false
                return
            }
            oVert = true
            break
        case 'l':
        case 'L':
            if(oVert) orange_dir = "right"
            else {
                player2.stopDir[orange_dir] = false
                return
            }
            oVert = false
            break
        case 'j':
        case 'J':
            if(oVert) orange_dir = "left"
            else {
                player2.stopDir[orange_dir] = false
                return
            }
            oVert = false
            break
        case 'k':
        case 'K':
            if(!oVert) orange_dir = "down"
            else {
                player2.stopDir[orange_dir] = false
                return
            }
            oVert = true
            break
        case 'o':
        case 'O':
            if (player2.turboCount > 0){
                if (Game.turboGenNeeded){
                    Biker.turboGen()
                    Game.turboGenNeeded = false
                }
                player2.move(orange_dir, 2)
                player2.stopDir[orange_dir] = false
                player2.turboCount--
                player2.turboBar.innerText = "█".repeat(player2.turboCount)
            }
            else{
                player2.stopDir[orange_dir] = false
                return
            }
            break
        case 'u':
        case 'U':
            await player2.jump(orange_dir)
            player2.stopDir[orange_dir] = false
            break
        default:
            player2.stopDir[orange_dir] = false
            return

    }
    player2.move(orange_dir, 1)
})
