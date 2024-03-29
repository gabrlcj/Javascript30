const canvas = document.querySelector('#draw')

const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

context.strokeStyle = '#BADA55'
context.lineJoin = 'round'
context.lineCap = 'round'
context.lineWidth = 100

let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0
let direction = true

function draw(e) {
  if (!isDrawing) return // Para a função quando o botão do maouse não estiver pressionado
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`
  context.beginPath()
  // Começa aqui
  context.moveTo(lastX, lastY)
  // Termina aqui
  context.lineTo(e.offsetX, e.offsetY)
  context.stroke()

  lastX = e.offsetX
  lastY = e.offsetY
  
  hue++

  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction
  }
  return direction == true ? context.lineWidth++ : context.lineWidth--
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true
  lastX = e.offsetX
  lastY = e.offsetY
})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)