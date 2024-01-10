class Biker{
    constructor(color, htmlObj){
        this.color = color
        this.theBikeItself = htmlObj
        this.theBikeItself.style.top = '0px'
        this.top = parseInt(this.theBikeItself.style.top.replace('px', ''))
        this.theBikeItself.style.left = '0px'
        this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))
    }
    leaveMark(direction){
        const div = document.createElement('div')
        div.className = this.color + 'Trail'
        div.classList.add("trail")
        this.theBikeItself.style.top = this.top + 5 + 'px'

        this.top = parseInt(this.theBikeItself.style.top.replace('px', ''))
        this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))

        div.style.top = this.top + 'px'
        div.style.left = this.left + 'px'
        GRID.appendChild(div)
        
    }
    turn(){

    }
    turbo(){

    }
    jump(){

    }
    death(){

    }
}
class BlueBiker extends Biker{

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
const GRID = document.querySelector("#grid")
function fillGrid(){
    for(let i = 0; i < 121; i++){
        let tile = document.createElement("div")
        tile.className = "gridTile"
        GRID.appendChild(tile)
    }
}
fillGrid()

const blueBike = document.querySelector('#blue')
const oranBike = document.querySelector('#orange')

let player1 = new Biker("blue", blueBike)

async function anyád(){
    for(let i = 0; i < 50; i++){
        player1.leaveMark(10)
        await delay(25)
    }

}
function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds)
    });
}
anyád()

// const extractPixelColor = (cols: number, x: number, y: number) => {
//     //To get the exact pixel, the logic is to multiply total columns in this image with the row position of this pixel and then add the column position of this pixed
//     let pixel = cols * x + y;
//     //To get the array position in the entire image data array, simply multiply your pixel position by 4 (since each pixel will have its own r,g,b,a in that order)
//     let position = pixel * 4;
//     //the rgba value of current pixel will be the following
//     return {
//       red: data[position],
//       green: data[position + 1],
//       blue: data[position + 2],
//       alpha: data[position + 3],
//     };
//   };