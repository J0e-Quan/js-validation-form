import './styles.css' 

const form = document.querySelector('form')
const submit = document.querySelector('button')
let isValid = false
form.addEventListener('input', (target) => {
  //js validation code here
})
submit.addEventListener('click', () => {
  if (isValid === true) {
    alert('Form details are valid! Thanks for providing your info :)')
  } else {
    alert('Form information is invalid! Please refer to the error boxes for clarification.')
  }
})
