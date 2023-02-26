export default function(){
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const coffeShoppAudio = new Audio("https://github.com/jacksonMarcelinoFreitas/testes/blob/master/Cafeteria.wav")
    const rainAudio = new Audio("https://github.com/jacksonMarcelinoFreitas/testes/blob/master/Chuva.wav")
    const forestAudio = new Audio("https://github.com/jacksonMarcelinoFreitas/testes/blob/master/Floresta.wav")
    const fireplaceAudio = new Audio("https://github.com/jacksonMarcelinoFreitas/testes/blob/master/Lareira.wav")

    coffeShoppAudio.loop = true
    rainAudio.loop = true
    forestAudio.loop = true
    fireplaceAudio.loop = true

    function pressButton(){
        buttonPressAudio.play()
    }

    function timeEnd(){
        kitchenTimer.play()
    }

    return {
        pressButton,
        timeEnd,
        coffeShoppAudio,
        rainAudio,
        forestAudio,
        fireplaceAudio
    }
}