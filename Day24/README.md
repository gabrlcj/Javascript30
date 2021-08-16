<div align="center">
  <img src=".github/../../.github/Day24-img/title-day24.svg">
</div>

## Sobre
Neste projeto criamos uma barra de controle de velocidade do vídeo customizada, sendo controlada conforme você movimenta o mouse em cima da barra, podendo aumentar ou diminuir a velocidade.

Aqui um pouco do código utilizado:
```javascript
// Esta foi a única função necessária para a criação deste projeto, utilizando uma função direto
// no addEventListener, sincronizando a velocidade do vídeo com a velocidade da barra de controle
speed.addEventListener('mousemove', function (e) {
  const y = e.pageY - this.offsetTop
  const percent = y / this.offsetHeight
  const [min, max] = [0.4, 4]
  const height = Math.round(percent * 100) + '%'
  const playbackRate = percent * (max - min) + min
  bar.style.height = height
  bar.textContent = playbackRate.toFixed(2) + 'x'
  video.playbackRate = playbackRate
})
```

## Imagem
<div align="center">
  <img src=".github/../../.github/Day24-img/day24.gif" width="800">
</div>

## Autor
<img src="https://unavatar.now.sh/github/gabrlcj" width="175" />

## [Gabriel Bittencourt Penteado](https://www.linkedin.com/in/gabriel-bittencourt-penteado/)

#### Feito com 🤎 por *Gabriel Bittencourt Penteado*. Entre em contato! 👋🏽