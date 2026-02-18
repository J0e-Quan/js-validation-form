import './styles.css' 

const form = document.querySelector('form')
const submit = document.querySelector('button')
let isValid = false
form.addEventListener('input', (target) => {
  //js validation code here
})
submit.addEventListener('click', () => {
  if (isValid === true) {
    //submit form code here
  } else {
    //invalid form code here
  }
})
