import Game from "./Game.js"
import Direction from "./DirectionSwitch.js"
import PlayAudio from "./Audio.js"
import { player1, player2 } from "./script.js"
class Biker{
    constructor(color, htmlObj, turboBar){
        this.color = color
        this.theBikeItself = htmlObj
        this.theBikeItself.style.top = '272px'
        this.top = parseInt(this.theBikeItself.style.top.replace('px', ''))
        this.theBikeItself.style.left = '0px'
        this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))
        this.stopDir = {
            "left" : false,
            "up" : false,
            "down" : false,
            "right" : false
        }
        this.turboCount = 3
        this.wrecked = false
        this.turboBar = turboBar
        this.score = 0
        this.hitbox = document.createElement('div')
        this.hitbox.className = this.color + "Hitbox"
        this.hitbox.classList.add("Hitbox")
        Game.GRID.appendChild(this.hitbox)
    }
    leaveMark(direction){
        this.hitbox.className = `${this.color + "Hitbox"} Hitbox`
        this.hitbox.classList.add(direction + "Hitbox")
        let d = new Direction()
        d.getNums(direction)
        const div = document.createElement('div')
        div.className = this.color + 'Trail'
        div.classList.add("trail")
        this.hitbox.style.top = parseInt(this.hitbox.style.top.replace("px", "")) + 5*d.top + 'px'
        this.hitbox.style.left = parseInt(this.hitbox.style.left.replace("px", "")) + 5*d.left + 'px'
        this.theBikeItself.style.top = this.top + 5*d.top + 'px'
        this.theBikeItself.style.left = this.left + 5*d.left + 'px'
        this.theBikeItself.style.rotate = 90*d.rotate + 'deg'
        this.theBikeItself.style.transform = d.transform
        this.top = parseInt(this.theBikeItself.style.top.replace('px', ''))
        this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))
        div.style.top = this.top + 'px'
        div.style.left = this.left + 'px'
        Game.GRID.appendChild(div)
    }
    async move(direction, speed, p1, p2){
        const sp = [25, 10][speed-1]
        let i = 0
        while (this.left <= 520 && this.left >= 30 && this.top >= 25 && this.top <= 525){
            if (Biker.checkDeath(this) == this.color) break
            else if (Biker.checkDeath(this) == this.color + "Turbo") {
                //turbocharge
            }
            this.leaveMark(direction)
            await Game.delay(sp)
            if (this.stopDir[direction] || (speed == 2 && i >= 15)) {
                return
            }
            i++
        }
        new PlayAudio("./sound/deathSound.mp3").PlayMusic()
        this.wrecked = true
        alert((this.color == "blue" ? "Orange" : "Blue") + " won the round!")
        this.score++
        document.querySelectorAll(".trail").forEach((i)=>{
            Game.GRID.removeChild(i)
        })
        document.querySelectorAll(".lightning").forEach((i)=>{
            Game.GRID.removeChild(i)
        })
        document.querySelector(`#${this.color == "blue" ? "oran" : "blue"}score`).innerText = this.score
        // -----
        p1.theBikeItself.style.top = "272px"
        p2.theBikeItself.style.top = "272px"
        // let d = new Direction()
        // d.getNums("left")
        // p1.theBikeItself.style.rotate = 90*d.rotate + "deg"
        // p1.theBikeItself.style.transform = d.transform
        // d.getNums("right") 
        // p2.theBikeItself.style.rotate = 90*d.rotate + "deg"
        // p2.theBikeItself.style.transform = d.transform
        // new object?
        p1.Start(p1.wrecked)
        p2.Start(p2.wrecked)
        await Game.delay(500)
        return
    }   
    async jump(direction){
        for(let i = 0; i < 10; i++){
            let d = new Direction()
            d.getNums(direction)
            this.theBikeItself.style.top = this.top + 5*d.top + 'px'
            this.theBikeItself.style.left = this.left + 5*d.left + 'px'
            this.hitbox.style.top = parseInt(this.hitbox.style.top.replace("px", "")) + 5*d.top + 'px'
            this.hitbox.style.left = parseInt(this.hitbox.style.left.replace("px", "")) + 5*d.left + 'px'
            this.top = parseInt(this.theBikeItself.style.top.replace('px', ''))
            this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))
            await Game.delay(10)
        }   
    }
    turn(){
        this.stopDir = {
            "left" : false,
            "up" : false,
            "down" : false,
            "right" : false
        }
    }
    static async turboGen(){
        while(true){
            let i = 0
            await Game.delay(15000)
            let x = Game.randint(30, 520)
            let y = Game.randint(25, 525)
            while(x == this.left || y == this.top){
                x = Game.randint(30, 520)
                y = Game.randint(25, 525)
            }
            let lightning = document.createElement("div")
            lightning.style.top = y + "px"
            lightning.style.left = x + "px"
            lightning.className = "lightning"
            lightning.id = `l${i}`
            grid.appendChild(lightning)
            i++
        }
    }
    async Start(move = true){
        console.log("asasafs")
        this.turboCount = 3
        this.turboBar.innerText = "███"
        this.wrecked = false
        this.theBikeItself.style.left = this.color == "blue" ? "80px": "465px"
        this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))
        this.hitbox.style.left = this.left + "px"
        this.hitbox.style.top = this.top - 5 + "px"
        if(move) this.move(this.color == "blue" ? "right" : "left", 1, player1, player2)
    }
    static collides(bike, b) {
        let d1 = bike.hitbox.getBoundingClientRect()
        let d2 = b.getBoundingClientRect()
        let ox = Math.abs((d1.x + (bike.color == "blue" ? 15 : 10)) - (d2.x + 2.5)) < ((d1.x + 15) < (d2.x + 2.5) ? d2.width : d1.width);
        let oy = Math.abs((d1.y + 15) - (d2.y + 2.5)) < ((d1.y + 15) < (d2.y + 2.5) ? d2.height : d1.height);
        return ox && oy;
    }
    static checkDeath(bike){
        let trails = document.querySelectorAll(".trail")
        let lightnings = document.querySelectorAll(".lightning")
        for (let i of trails) {
            if (Biker.collides(bike, i)) return bike.color
        }
        for (let i of lightnings) {
            if (Biker.collides(bike, i)) return bike.color + "Turbo"
        }
        return "semmi"
    }
    // static gameOver(){
    //     console.log("asd")
    // }
}
export default Biker