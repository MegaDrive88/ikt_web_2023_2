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
        while (this.left <= 495 && this.left >= 0){
            this.leaveMark(direction)
            await Game.delay(25)
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
        }//color detectiont majd itt ki kéne kapcsolni        
    }
    death(){

    }
}
class BlueBiker extends Biker{
    // turn = function(){
        
    // } ez az override
    async Start(){
        this.theBikeItself.style.left = '80px'
        this.left = parseInt(this.theBikeItself.style.left.replace('px', ''))
        // await player1.jump("left")
        player1.move("right")
    }
}
class OrangeBiker extends Biker{
    async Start(){
        this.theBikeItself.style.left = '460px'
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

document.addEventListener("keypress", (e)=>{
    blue_dir = "n--as in paris"
    orange_dir = "n--as in paris"
    switch(e.key){
        //basically mindent ide!!!!!
        case 'w':
        case 'W':

    }
})
Game.Start()





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

//cols: Width of the image representing total number of columns
//x: Row position of this pixel
//y: Column position of this pixel
// const extractPixelColor = (cols, x, y) => {
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
// getImageData(x, y, 1, 1).data

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