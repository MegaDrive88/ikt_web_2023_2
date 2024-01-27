import Game from "./Game.js"
import { BlueBiker, OrangeBiker } from "./UniqueBikers.js"

Game.fillGrid()
const blueBike = document.querySelector('#blue')
const oranBike = document.querySelector('#orange')
const player1 = new BlueBiker("blue", blueBike)
const player2 = new OrangeBiker("oran", oranBike)
Game.Start(player1, player2)
let blue_dir = "right"
let orange_dir = "left"
// kék
document.addEventListener("keypress", (e)=>{
    player1.turn()
    player1.stopDir[blue_dir] = true
    switch(e.key){
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
        case 'e':
        case 'E':
            player1.move(blue_dir, 2)
        default:
            player1.stopDir[blue_dir] = false
            return
    }
    player1.move(blue_dir, 1)
})
//narancs
document.addEventListener("keypress", (e)=>{
    player2.turn()
    player2.stopDir[orange_dir] = true
    switch(e.key){
        case 'i':
        case 'I':
            orange_dir = "up"
            break
        case 'l':
        case 'L':
            orange_dir = "right"
            break
        case 'j':
        case 'J':
            orange_dir = "left"
            break
        case 'k':
        case 'K':
            orange_dir = "down"
            break
        case 'o':
        case 'O':
            player2.move(orange_dir, 2)
        default:
            player2.stopDir[orange_dir] = false
            return

    }
    player2.move(orange_dir, 1)
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
