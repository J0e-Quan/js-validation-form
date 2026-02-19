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
  updateIsValid()
  if (inputName === 'email') {
    if (!event.target.validity.valid) {
      showError(inputName, 'This is not a valid email! Emails must include @')
    } else {
      hideError(inputName)
    }
  } else if (inputName === 'country') {
    if (!event.target.validity.valid) {
      showError(inputName, 'Please enter a country name!')
    } else {
      hideError(inputName)
    }
  } else if (inputName === 'postal-code') {
    if (!event.target.validity.valid) {
      showError(inputName, 'Please enter a valid postal code!')
    } else {
      hideError(inputName)
    }
  } else if (inputName === 'pw' || inputName === 'pw-confirm') {
    const originalPwInput = document.querySelector('#pw')
    const originalPw = originalPwInput.value
    const pwInput = document.querySelector('#pw-confirm')
    const pw = pwInput.value
    if (originalPwInput.validity.tooShort) {
      showError('pw', 'Password must have at least 8 characters!')
    } else if (originalPwInput.validity.patternMismatch) {
      showError('pw', 'Password must contain at least 1 special character and 1 number!')
    } else {
      hideError('pw')
    }
    if (pw !== originalPw) {
      showError('pw-confirm', 'Password does not match!')
      pwInput.setCustomValidity('Password does not match!')
    } else if (pw === originalPw) {
      pwInput.setCustomValidity('')
      hideError('pw-confirm')
    }
  }
})
submitBtn.addEventListener('click', (btn) => {
  updateIsValid()
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
