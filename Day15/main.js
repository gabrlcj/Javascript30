const hero = document.querySelector(".hero")
const text = hero.querySelector("h1")
const walk = 200 // 100px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero
  let { offsetX: x, offsetY: y } = e

  if (this != e.target) {
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2))
  const yWalk = Math.round((y / height * walk) - (walk / 2))

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 118, 0, 0.8),
    ${xWalk * -1}px ${yWalk}px 0 rgba(82, 0, 106, 0.8),
    ${xWalk}px ${yWalk * -1}px 0 rgba(205, 17, 59, 0.8),
    ${yWalk}px ${xWalk}px 0 rgba(255, 169, 0, 0.8)
  `
}

hero.addEventListener('mousemove', shadow)