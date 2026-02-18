import './styles.css'

const form = document.querySelector('form')
const submitBtn = document.querySelector('button')
const errorBoxes = document.querySelectorAll('.error-box')
errorBoxes.forEach((box) => {
  box.classList.add('hidden')
})
let isValid = false

function showError(target, content) {
  const targetBox = document.querySelector('.error-box' + '.' + target)
  if (target === 'submit') {
    targetBox.classList.remove('success')
  }
  targetBox.classList.remove('hidden')
  targetBox.textContent = content
}

function hideError(target) {
  const targetBox = document.querySelector('.error-box' + '.' + target)
  targetBox.classList.add('hidden')
  targetBox.textContent = ''
}

function updateIsValid() {
  if (form.checkValidity()) {
    isValid = true
  } else {
    isValid = false
  }
}

function showSuccessMessage() {
  const successBox = document.querySelector('.error-box.submit')
  successBox.classList.remove('hidden')
  successBox.classList.add('success')
  successBox.textContent = 'Form details are valid! Thanks for providing your information :)'
}

form.addEventListener('input', (event) => {
  const inputName = event.target.id
  if (inputName === 'email') {
    if (!event.target.validity.valid) {
      showError(inputName, 'This is not a valid email! Emails must include @')
    } else {
      hideError(inputName)
      updateIsValid()
    }
  } else if (inputName === 'country') {
    if (!event.target.validity.valid) {
      showError(inputName, 'Please enter a country name!')
    } else {
      hideError(inputName)
      updateIsValid()
    }    
  } else if (inputName === 'postal-code') {
    if (!event.target.validity.valid) {
      showError(inputName, 'Please enter a valid postal code!')
    } else {
      hideError(inputName)
      updateIsValid()
    }
  } else if (inputName === 'pw') {
    if (event.target.validity.tooShort) {
      showError(inputName, 'Password must have at least 8 characters!')
    } else if (event.target.validity.patternMismatch) {
      showError(inputName, 'Password must contain at least 1 special character and 1 number!')
    } else {
      hideError(inputName)
      updateIsValid()
    }
  } else if (inputName === 'pw-confirm') {
    const originalPwInput = document.querySelector('#pw')
    const originalPw = originalPwInput.value
    const pwInput = document.querySelector('#pw-confirm')
    const pw = pwInput.value
    if (pw !== originalPw) {
      showError(inputName, 'Password does not match!')
    } else if (pw === originalPw && pwInput.checkValidity()) {
      hideError(inputName)
      updateIsValid()
    }
  }
})
submitBtn.addEventListener('click', (btn) => {
  btn.preventDefault()
  if (isValid === true) {
    hideError('submit')
    showSuccessMessage()
  } else {
    showError(
      'submit',
      'Form information is invalid! Please refer to the other error boxes for clarification.'
    )
  }
})
