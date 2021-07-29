const player = document.querySelector('.player')
const video = document.querySelector('.viewer')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled')
const toggle = document.querySelector('.toggle')
const skipButtons = document.querySelectorAll('[data-skip]')
const ranges = document.querySelectorAll('.player__slider')
const fullscreen = document.querySelector('.fullscreen')


function togglePlay() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

function updateButton() {
  const icon = this.paused ? '▶︁' : '❚❚';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

function progressManually(e) {
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = progressTime
}

function toggleFullscreen() {
 if (video.requestFullscreen) {
   video.requestFullscreen()
 } else {
   document.exitFullscreen()
 }
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay)

skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))

progress.addEventListener('click', progressManually)

fullscreen.addEventListener('click', toggleFullscreen)