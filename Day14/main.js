const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const checkAll = document.querySelector('.check-all')
const uncheckAll = document.querySelector('.uncheck-all')
const clearAll = document.querySelector('.clear-all')
const items = JSON.parse(localStorage.getItem('items')) || []

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

function toggleDone(e) {
  if (!e.target.matches('input')) return
  const el = e.target
  const index = el.dataset.index
  items[index].done = !items[index].done

  localStorage.setItem('items', JSON.stringify(items))
  populateList(items, itemsList)
}

function checkItems() {
  items.forEach((item) => {
    item.done = true

    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)
  })
}

function uncheckItems() {
  items.forEach((item) => {
    item.done = false

    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)
  })
}

function clearItems() {
  localStorage.clear()
  document.location.reload()
}

itemsList.addEventListener('click', toggleDone)
addItems.addEventListener('submit', addItem)

checkAll.addEventListener('click', checkItems)
uncheckAll.addEventListener('click', uncheckItems)
clearAll.addEventListener('click', clearItems)

populateList(items, itemsList)