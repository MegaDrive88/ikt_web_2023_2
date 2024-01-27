class Direction {
    constructor(){
        this.top = 0
        this.left = 0
        this.rotate = 0
        this.transform = ""
    }
    getNums(direction){
        switch (direction){
            case "left":
                this.transform = "translate(calc(50% - 2px), -25px)"
                this.left = -1
                this.rotate = 3
                break
            case "right":
                this.transform = "translate(calc(-50% + 2px), 21px)"
                this.left = 1
                this.rotate = 1
                break
            case "up":
                this.transform = "translate(-23px, calc(-50% + 2px))"
                this.top = -1
                break
            case "down":
                this.transform = "translate(22px, calc(50% - 2px))"
                this.top = 1
                this.rotate = 2
                break
        }
    }
}
export default Direction