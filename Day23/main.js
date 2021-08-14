const slider = document.querySelector('.items')
let isDown = false
let startX
let ScrollLeft

slider.addEventListener('mousedown', (e) => {
  isDown = true
  slider.classList.add('active')
  startX = e.pageX - slider.offsetLeft
  scrollLeft = slider.scrollLeft
})
slider.addEventListener('mouseleave', () => {
  isDown = false
  slider.classList.remove('active')
})
slider.addEventListener('mouseup', () => {
  isDown = false
  slider.classList.remove('active')
})
slider.addEventListener('mousemove', (e) => {
  e.preventDefault()
  if (!isDown) return
  const x = e.pageX - slider.offsetLeft
  const slide = x - startX
  slider.scrollLeft = scrollLeft - slide
})
