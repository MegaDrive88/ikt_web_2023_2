class PlayAudio{
    constructor(soundFile){
        this.sound = new Audio(soundFile)
        this.isPlayed = 0
    }
    async PlayMusic(){
        if(this.isPlayed == 0){
            this.sound.play()
            this.isPlayed = 1
        }
    }
    async StopMusic(){
        this.sound.pause()
    }
}
    const music = new PlayAudio(`sound/sound0.mp3`)
    addEventListener("keydown", (event) => {
        if (event.isComposing || event.keyCode === 77){
            music.PlayMusic()
        }
        if (event.isComposing || event.keyCode === 78){
            music.StopMusic()
        }
    });
export default PlayAudio