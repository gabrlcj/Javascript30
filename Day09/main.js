const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']")

let lastChecked

function handleCheck(e) {
  // Checar se a tecla shift esta pressionada
  // E checar se eles estão checando os inputs
  let inBetween = false
  if (e.shiftKey && this.checked) {
    // Fazer um loop sobre todos os inputs
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
      }

      if (inBetween) {
        checkbox.checked = true
      }
    })
  }

  lastChecked = this
}



checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))