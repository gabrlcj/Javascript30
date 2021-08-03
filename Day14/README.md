<div align="center">
  <img src=".github/../../.github/Day14-img/title-day14.svg">
</div>

## Sobre
Neste projeto utilizamos o *Local Storage* do navegador e também utilizamos *Delegação de Eventos*, duas coisas muito importantes dentro do JS.

Para utilizar o local storage usamos `localStorage` e em seguida chamamos um método podendo ser `getItem(), setItem(), removeItem() ou clear()`, aqui vai algumas funções que utilizei:
```javascript
// Nessa função temos o meio de adicionar itens a nossa lista, que será salva no local storage
// E irá adicionalos ao array de items
function addItem(e) {
  e.preventDefault()
  const text = (this.querySelector('[name=item]')).value
  const item = {
    text,
    done: false
  }
  items.push(item)
  populateList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items))
  this.reset()
}

// Aqui vai acontecer a adição desses itens no nosso HTML
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `
  }).join('')
}

// Essa função realiza a marcação dos itens na lista, podendo ser marcados ou não
function toggleDone(e) {
  if (!e.target.matches('input')) return
  const el = e.target
  const index = el.dataset.index
  items[index].done = !items[index].done

  localStorage.setItem('items', JSON.stringify(items))
  populateList(items, itemsList)
}
```

Neste projeto também tivemos alguns desafios para implementar 3 botões, `checkAll, uncheckAll e clearAll`. Que utilizei as seguintes funções:
```javascript
// Função de marcar todos os itens
function checkItems() {
  items.forEach((item) => {
    item.done = true

    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)
  })
}

// Função de desmarcar todos os itens
function uncheckItems() {
  items.forEach((item) => {
    item.done = false

    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)
  })
}

// Função de limpar todos os itens da lista e do local storage
function clearItems() {
  localStorage.clear()
  document.location.reload()
}
```

## Imagem
<div align="center">
  <img src=".github/../../.github/Day14-img/day14.gif" width="800">
</div>

## Autor
<img src="https://unavatar.now.sh/github/gabrlcj" width="175" />

## [Gabriel Bittencourt Penteado](https://www.linkedin.com/in/gabriel-bittencourt-penteado/)

#### Feito com 🤎 por *Gabriel Bittencourt Penteado*. Entre em contato! 👋🏽