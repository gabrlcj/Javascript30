<div align="center">
  <img src=".github/../../.github/Day24-img/title-day24.svg">
</div>

## Sobre
Neste projeto criamos um contador com botões com valores pré definidos e um input para escolher um tempo personalizado, mostrando em tela o timer e quando ele irá acabar.

Aqui um pouco do código utilizado:
```javascript
// Aqui temos a função principal do projeto onde se inicializa o timer, temos um clear para o interval
// e todo o display dos números em tela
function timer(seconds) {
  clearInterval(countdown)
  const now = Date.now()
  const then = now + seconds * 1000
  displayTimeLeft(seconds)
  displayEndTime(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    if (secondsLeft < 0) {
      clearInterval(countdown)
      return
    }
    displayTimeLeft(secondsLeft)
  }, 1000)
}
```

## Imagem
<div align="center">
  <img src=".github/../../.github/Day24-img/day24.gif" width="800">
</div>

## Autor
<img src="https://unavatar.now.sh/github/gabrlcj" width="175" />

## [Gabriel Bittencourt Penteado](https://www.linkedin.com/in/gabriel-bittencourt-penteado/)

#### Feito com 🤎 por *Gabriel Bittencourt Penteado*. Entre em contato! 👋🏽