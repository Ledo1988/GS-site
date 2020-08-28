const cheaperForm = document.querySelector('.cheaper__form')
const cheaperFormInputs = cheaperForm.querySelectorAll('.cheaper__input')
const cheaperFormSubmit = cheaperForm.querySelectorAll('.cheaper__submit')

cheaperFormInputs.forEach(item => item.addEventListener('change', (event) => cheaperFormInputsValid(event)))

function cheaperFormInputsValid(event) {
    let input = event.target;
    let inputPattern = inputPatternCheck(input);

   if (inputPattern) {
       input.classList.add('input__correct')

       if (input.classList.contains('input__error')) {
           input.classList.remove('input__error')
       }

   } else {

       if (input.classList.contains('input__correct')) {
           input.classList.remove('input__correct')
       }
   }

   submitUnable();
}

function inputPatternCheck(input) {
    const textPattern = /[а-яА-ЯЁё][a-zA-Z]/;
    const telPattern = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
console.log(input)
    if(input.value.match(textPattern) || input.value.match(telPattern)) {
        return true;
    } else {
        return false;
    }

}

function submitUnable() {
    let inputsArr = Array.from(cheaperFormInputs)
    inputsArr = inputsArr.map(item => item.classList.contains('input__error'))

    if (inputsArr.length > 0) {
        cheaperFormSubmit.classList.remove('submit__correct')
    } else {
        cheaperFormSubmit.classList.add('submit__correct')
    }
}