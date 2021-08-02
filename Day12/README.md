<div align="center">
  <img src=".github/../../.github/Day12-img/title-day12.svg">
</div>

## Sobre
Nesta aula aprendemos como fazer uma imagem aparecer conforme o evento de scroll do mouse, um evento muito interessante para as páginas. (Porém existe bibliotecas que fazem isso por nós como a [ScrollReveal](https://scrollrevealjs.org/guide/hello-world.html)).

A função principal que utilizamos foi a seguinte:
```javascript
function checkSlide() {
  sliderImages.forEach(sliderImage => {
    // Metade da imagem aparecendo
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2
    // Parte de baixo da imagem
    const imageBottom = sliderImage.offsetTop + sliderImage.height

    const isHalfShown = slideInAt > sliderImage.offsetTop
    const isNotScrolledPast = window.scrollY < imageBottom

    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active')
    } else {
      sliderImage.classList.remove('active')
    }
  })
}
```
Servindo para adicionar uma classe nas imagens de "active" e assim tranzendo elas com o "translate".

## Imagem
<div align="center">
  <img src=".github/../../.github/Day12-img/day12.gif" width="800">
</div>

## Autor
<img src="https://unavatar.now.sh/github/gabrlcj" width="175" />

## [Gabriel Bittencourt Penteado](https://www.linkedin.com/in/gabriel-bittencourt-penteado/)

#### Feito com 🤎 por *Gabriel Bittencourt Penteado*. Entre em contato! 👋🏽