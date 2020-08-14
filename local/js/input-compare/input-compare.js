const inputCompare = document.querySelectorAll(".input-compare__item");

inputCompare.forEach(input => {
    input.addEventListener('change', (event) => { inputCompareChange(event) }) });


function inputCompareChange (event) {
    let input = event.target;
    let isChecked = input.checked;
    let inputTextElement = input.closest('.input-compare');

    if (isChecked) {
        inputTextElement.querySelector('.input-compare__title').innerText = "В сравнении"
    } else {
        inputTextElement.querySelector('.input-compare__title').innerText = "Добавить в сравнение"
    }
}