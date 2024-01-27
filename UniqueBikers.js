class BlueBiker extends Biker{
    async Start(){
        this.theBikeItself.style.left = '80px'
        this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))
        this.move("right")
    }
}

class OrangeBiker extends Biker{
    async Start(){
        this.theBikeItself.style.left = '465px'
        this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))
        // this.move("left")
    }
}