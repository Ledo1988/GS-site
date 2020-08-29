const cheaperForm = document.querySelector('.cheaper__form')
const cheaperFormInputs = cheaperForm.querySelectorAll('.cheaper__input')
const cheaperFormSubmit = cheaperForm.querySelector('.cheaper__submit')

cheaperFormInputs.forEach(item => item.addEventListener('input', (event) => cheaperFormInputsValid(event)))

function cheaperFormInputsValid(event) {
    let input = event.target;
    let label = input.closest('.cheaper__label');
    let inputPattern = inputPatternCheck(input);

   if (inputPattern && input.value !== "") {
       input.classList.add('cheaper__input_correct')
       label.classList.add('cheaper__label_correct')

       if (input.classList.contains('cheaper__input_error')) {
           input.classList.remove('cheaper__input_error')
           label.classList.remove('cheaper__label_error')
       }

   } else {
       input.classList.add('cheaper__input_error')
       label.classList.add('cheaper__label_error')

       if (input.classList.contains('cheaper__input_correct')) {
           input.classList.remove('cheaper__input_correct')
           label.classList.remove('cheaper__label_correct')
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
    const inputsArr = Array.from(cheaperFormInputs)
    const inputsArrError = inputsArr.filter(item => item.classList.contains('cheaper__input_error'))
    const inputsArrCorrect = inputsArr.filter(item => item.classList.contains('cheaper__input_correct'))

    if (inputsArrError.length > 0 && cheaperFormSubmit.classList.contains('cheaper__submit_correct')) {
        cheaperFormSubmit.classList.remove('cheaper__submit_correct')
    } else if (cheaperFormInputs.length === inputsArrCorrect.length) {
        cheaperFormSubmit.classList.add('cheaper__submit_correct')
    }
}

//AJAX request
$(cheaperForm).submit(function(event) {
    /* stop form from submitting normally */
    event.preventDefault();

    $.ajax({
        url: "catalog-detailed.html",
        context: document.body,
        success: function () {
            let mainBox = cheaperForm.closest('.cheaper');
            let closeLink = mainBox.querySelector('.modal__close-link');
            let openLink = mainBox.querySelector('.modal__open-link');

            closeLink.click();
            openLink.click();
        }
    });
});