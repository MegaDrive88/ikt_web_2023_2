import Game from "./Game.js"
import Direction from "./DirectionSwitch.js"
class Biker{
    constructor(color, htmlObj){
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
    }
    leaveMark(direction){
        let d = new Direction()
        d.getNums(direction)
        const div = document.createElement('div')
        div.className = this.color + 'Trail'
        div.classList.add("trail")
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
    async jump(direction){
        for(let i = 0; i < 10; i++){
            this.theBikeItself.style.top = this.top + 5 + 'px'
            this.top = parseInt(this.theBikeItself.style.top.replace('px', ''))
            this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))
            await Game.delay(10)
        }//halált majd itt ki kéne kapcsolni        
    }
    turn(){
        this.stopDir = {
            "left" : false,
            "up" : false,
            "down" : false,
            "right" : false
        }
    }
}
export default Biker