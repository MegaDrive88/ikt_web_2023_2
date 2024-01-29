import Game from "./Game.js"
import Direction from "./DirectionSwitch.js"
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
    }
    leaveMark(direction){
        let d = new Direction()
        d.getNums(direction)
        const div = document.createElement('div')
        div.className = this.color + 'Trail'
        div.classList.add("trail")
        div.classList.add("underBike") // 150ms utan remove kéne
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
    async move(direction, speed){
        const sp = [25, 10][speed-1]
        let i = 0
        while (this.left <= 520 && this.left >= 30 && this.top >= 25 && this.top <= 525){
            this.leaveMark(direction)
            await Game.delay(sp)
            if (this.stopDir[direction] || (speed == 2 && i >= 15)) {
                return
            }
            i++
        }
        this.wrecked = true
        alert(this.color + " bozo")
    }
    async jump(direction){
        for(let i = 0; i < 10; i++){
            let d = new Direction()
            d.getNums(direction)
            this.theBikeItself.style.top = this.top + 5*d.top + 'px'
            this.theBikeItself.style.left = this.left + 5*d.left + 'px'
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
            grid.appendChild(lightning)
        }
    }
    async Start(){
        this.turboCount = 3
        this.turboBar.innerText = "███"
        this.wrecked = false
        this.theBikeItself.style.left = this.color == "blue" ? "80px": "465px"
        this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))
        this.move(this.color == "blue" ? "right" : "left", 1)
    }
    static async collides(a, b) {
        return (
            parseInt(a.style.left.replace('px', '')) <= parseInt(b.style.left.replace('px', '')) + parseInt(b.style.width.replace('px', '')) &&
            parseInt(a.style.left.replace('px', '')) + parseInt(a.style.width.replace('px', '')) >= parseInt(b.style.left.replace('px', '')) &&
            parseInt(a.style.top.replace('px', '')) + parseInt(a.style.width.replace('px', '')) <= parseInt(b.style.top.replace('px', '')) &&
            parseInt(a.style.top.replace('px', '')) >= parseInt(b.style.top.replace('px', '')) + parseInt(b.style.width.replace('px', ''))
        );
    }
    static checkDeath(bike1, bike2){
        // classname underBike
        // nem allhat meg
        while (true){
            let trails = document.querySelectorAll(".trail")
            let lightnings = document.querySelectorAll(".lightning")
            for (let i of trails) {
                if (!i.classList.contains("underBike") && this.collides(bike1.theBikeItself, i)) return bike1.color
                
                // if (this.collides(bike2.theBikeItself, i)) return bike2.color
            }
            return "meghalna a chrome"
            for (let i of lightnings) {
                if (this.collides(bike1.theBikeItself, i)) return bike1.color + "Turbo"
                if (this.collides(bike2.theBikeItself, i)) return bike2.color + "Turbo"
            }

        }
    }
    // death(){

    // }
}
export default Biker