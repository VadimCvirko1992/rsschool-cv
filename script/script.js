
const year = document.querySelector('.year')
const today = new Date()

today.getFullYear()
year.textContent = `  ${today.getFullYear()}г`

