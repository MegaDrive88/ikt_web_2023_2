import Biker from "./Biker.js"
import Game from "./Game.js"
class BlueBiker extends Biker{
    async Start(){
        this.turboCount = 3
        this.turboBar.innerText = "███"
        this.wrecked = false
        this.theBikeItself.style.left = '80px'
        this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))
        this.move("right", 1)
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
        alert("blue bozo")
    }
    // death(){

    // }
}

class OrangeBiker extends Biker{
    async Start(){
        this.turboCount = 3
        this.turboBar.innerText = "███"
        this.wrecked = false
        this.theBikeItself.style.left = '465px'
        this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))
        this.move("left", 1)
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
        alert("orange bozo")
    }
}
export {BlueBiker, OrangeBiker}