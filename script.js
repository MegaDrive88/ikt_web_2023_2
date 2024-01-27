import Game from "./Game.js"
import Biker from "./Biker.js"
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

Game.fillGrid()
const blueBike = document.querySelector('#blue')
const oranBike = document.querySelector('#orange')
const player1 = new BlueBiker("blue", blueBike)
const player2 = new OrangeBiker("oran", oranBike)
Game.Start(player1, player2)
let blue_dir = "right"
let orange_dir = "left"
document.addEventListener("keypress", (e)=>{
    player1.turn()
    player1.stopDir[blue_dir] = true
    switch(e.key){
        // case 'w':
        // case 'W':
        // case 'd':
        // case 'D':
        // case 'a':
        // case 'A':
        // case 's':
        // case 'S':
        // bal bal jobb jobb kurva
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
        // default:
    }
    player1.move(blue_dir)
})



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
