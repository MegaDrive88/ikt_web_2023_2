// var sound = new Audio('sound/sound0.mp3')
// sound.play()
class PlayAudio{
    constructor(soundFile){
        this.sound = new Audio(soundFile)
    }
    async PlayMusic(){
        this.sound.play()
    }
    async StopMusic(){
        this.sound.pause()
    }
}
const music = new PlayAudio("sound/sound0.mp3")
addEventListener("keydown", (event) => {
    if (event.isComposing || event.keyCode === 77){
        music.PlayMusic()
    }
    if (event.isComposing || event.keyCode === 78){
        music.StopMusic()
    }
});
//export default PlayAudio
// Bandi pls csinald ebbe a fileba