const cheaperForm = document.querySelector('.cheaper__form')
const cheaperFormInputs = cheaperForm.querySelectorAll('.cheaper__input')
const cheaperFormSubmit = cheaperForm.querySelector('.cheaper__submit')

cheaperFormInputs.forEach(item => item.addEventListener('input', (event) => cheaperFormInputsValid(event)))

function cheaperFormInputsValid(event) {
    let input = event.target;
    let label = input.closest('.cheaper__label');
    let inputPattern = inputPatternCheck(input);

   if (inputPattern) {
       input.classList.add('input__correct')
       label.classList.add('label__correct')
       if (input.classList.contains('input__error')) {
           input.classList.remove('input__error')
           label.classList.remove('label__error')
       }

   } else {
       input.classList.add('input__error')
       label.classList.add('label__error')

       if (input.classList.contains('input__correct')) {
           input.classList.remove('input__correct')
           label.classList.remove('label__correct')
       }
   }

   submitUnable();
}

function inputPatternCheck(input) {
    const textPattern = new RegExp("^[a-zA-Za-zA-Zа-яА-ЯЁё ]*$");
    const telPattern = new RegExp("([+](\\d{1})\\s?)?((\\(\\d{3}\\)|\\d{3})(-|\\s)?)\\d{3}(-|\\s)\\d{2}(-|\\s)\\d{2}");

    if(textPattern.test(input.value) || telPattern.test(input.value)) {
        return true;
    } else {
        return false;
    }

}

function submitUnable() {
    let inputsArr = Array.from(cheaperFormInputs)
    let inputsArrError = inputsArr.map(item => item.classList.contains('input__error'))

    if (inputsArrError.length > 0
        && cheaperFormSubmit.classList.contains('submit__correct')
        && cheaperFormInputs.length === inputsArr.length) {
        cheaperFormSubmit.classList.remove('submit__correct')
    } else {
        cheaperFormSubmit.classList.add('submit__correct')
    }
}