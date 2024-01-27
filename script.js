class Biker{
    constructor(color, htmlObj){
        this.color = color
        this.theBikeItself = htmlObj
        this.theBikeItself.style.top = '272px'
        this.top = parseInt(this.theBikeItself.style.top.replace('px', ''))
        this.theBikeItself.style.left = '0px'
        this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))
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
        this.top = parseInt(this.theBikeItself.style.top.replace('px', ''))
        this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))
        div.style.top = this.top + 'px'
        div.style.left = this.left + 'px'
        GRID.appendChild(div)
    }
    turn(){
        
    }
    async move(direction){
        while (this.left <= 520 && this.left >= 30){
            this.leaveMark(direction)
            await Game.delay(25)
            if (stopDir[direction]) {
                return
            }
        }
    }
    async turbo(direction){
        for(let i = 0; i < 20; i++){
            this.leaveMark(direction)
            await Game.delay(10)
        }
    }
    async jump(direction){
        for(let i = 0; i < 10; i++){
            this.theBikeItself.style.top = this.top + 5 + 'px'
            this.top = parseInt(this.theBikeItself.style.top.replace('px', ''))
            this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))
            await Game.delay(10)
        }//halált majd itt ki kéne kapcsolni        
    }
    death(){

    }
}
class BlueBiker extends Biker{
    super(){
        this.dir = "right"
    }
    async Start(){
        this.theBikeItself.style.left = '80px'
        this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))
        player1.move("right")
    }
}
class OrangeBiker extends Biker{
    super(){
        this.dir = "left"
    }
    async Start(){
        this.theBikeItself.style.left = '465px'
        this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))
        // player2.move("left")
    }
}
class Game{
    static fillGrid(){
        for(let i = 0; i < 121; i++){
            let tile = document.createElement("div")
            tile.className = "gridTile"
            GRID.appendChild(tile)
        }
    }
    static delay(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds)
        });
    }
    static async Start(){
        player1.Start()
        player2.Start() 
    }
}

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
                this.left = -1
                this.rotate = 3
                break
            case "right":
                this.left = 1
                this.rotate = 1
                break
            case "up":
                this.top = -1
                break
            case "down":
                this.top = 1
                this.rotate = 2
                break
        }
    }
}




const GRID = document.querySelector("#grid")
Game.fillGrid()
const blueBike = document.querySelector('#blue')
const oranBike = document.querySelector('#orange')
const player1 = new BlueBiker("blue", blueBike)
const player2 = new OrangeBiker("oran", oranBike)
const abortController = new AbortController() // asynceket megoli
Game.Start()
//GLOBALS
let stopDir = {
    "left" : false,
    "up" : false,
    "down" : false,
    "right" : false
}
let blue_dir = "right"
let orange_dir = "left"
//
document.addEventListener("keypress", (e)=>{
    turn()
    stopDir[blue_dir] = true
    switch(e.key){
        case 'w':
        case 'W':
            blue_dir = "up"
            break
        case 'd':
        case 'D':
            blue_dir = "right"
            break
        case 'a':
        case 'A':
            blue_dir = "left"
            break
        case 's':
        case 'S':
            blue_dir = "down"
            break

    }
    player1.move(blue_dir)

})
function turn(){
    stopDir = {
        "left" : false,
        "up" : false,
        "down" : false,
        "right" : false
    }
}




// class DirectionNums{
//     show(keycode) {
//         switch(keycode){
//             //fel
//             case 87:
//             case 73:
//                 return 0
//             //bal
//             case 65:
//             case 74:
//                 return 3
//             //le
//             case 83:
//             case 75:
//                 return 2
//             //jobb
//             case 70:
//             case 76:
//                 return 1
//         }
//     }
// }

// egér pozi
// (function() {
//     document.onmousemove = handleMouseMove;
//     function handleMouseMove(event) {
//         var eventDoc, doc, body;

//         event = event || window.event; // IE-ism

//         // If pageX/Y aren't available and clientX/Y are,
//         // calculate pageX/Y - logic taken from jQuery.
//         // (This is to support old IE)
//         if (event.pageX == null && event.clientX != null) {
//             eventDoc = (event.target && event.target.ownerDocument) || document;
//             doc = eventDoc.documentElement;
//             body = eventDoc.body;

//             event.pageX = event.clientX +
//               (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
//               (doc && doc.clientLeft || body && body.clientLeft || 0);
//             event.pageY = event.clientY +
//               (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
//               (doc && doc.clientTop  || body && body.clientTop  || 0 );
//         }

//         // Use event.pageX / event.pageY here
//         console.log(event.pageX)
//         console.log(event.pageY)
//     }
// })();


// function myKeyPress(e){
//     var keynum;
  
//     if(window.event) { // IE                  
//       keynum = e.keyCode;
//     } else if(e.which){ // Netscape/Firefox/Opera                 
//       keynum = e.which;
//     }
  
//     alert(String.fromCharCode(keynum));
// }
// <input type="text" onkeypress="return myKeyPress(event)">
