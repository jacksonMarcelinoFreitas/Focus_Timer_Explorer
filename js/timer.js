import Sounds from "./sounds.js"

export default function Timer({ 
  minutesDisplay, 
  secondsDisplay, 
  resetControls,
  sound
}){

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)


  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)

      if (isFinished) {
        resetControls()
        updateDisplay()
        Sounds().timeEnd()
        return
      }

      if( seconds <= 0 ) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function updateMinutes(newMinutes){
    minutes = newMinutes
  }

  function hold(){
    clearTimeout(timerTimeOut)
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold
  }

}

  
// export function Timer({ 
//   minutesDisplay, 
//   secondsDisplay, 
//   timerTimeOut, 
//   resetControls
// }) {

//   function updateTimerDisplay(minutes, seconds) {
//     minutesDisplay.textContent = String(minutes).padStart(2, "0")
//     secondsDisplay.textContent = String(seconds).padStart(2, "0")
//   }

//   function resetTimer() {
//     updateTimerDisplay(minutes, 0)
//     clearTimeout(timerTimeOut)
//   }

//   function countdown(){
//     timerTimeOut = setTimeout(function() {
//       let seconds =  Number(secondsDisplay.textContent)
//       let minutes = Number(minutesDisplay.textContent)

//       updateTimerDisplay(minutes, 0)

//       if (minutes <= 0) {
//         resetControls()
//         return
//       }

//       if( seconds <= 0 ) {
//         seconds = 3
//         --minutes
//       }

//       updateTimerDisplay(minutes, String(seconds - 1))

//       countdown()
//     }, 1000)
//   }

//   return {
//     countdown,
//     resetTimer
//   }
// }
//named exports
// export {countdown, resetTimer, updateTimerDisplay}

//factory consiste em criar um fun??ao inserindo tudo oq precisamos
//colocar para fora um objeto com oq ?? necess??rio l?? fora
//se eu precisar de depend??ncias eu posso injetar depend??ncias nesta