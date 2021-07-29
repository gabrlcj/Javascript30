const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`div.key[data-key="${e.keyCode}"]`)
  
  key.classList.add('playing')

  if(!audio) return //Isso ira parar a função 

  audio.currentTime = 0 // Reseta o audio para tocar multiplas vezes
  audio.play()
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)