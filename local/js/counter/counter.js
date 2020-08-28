let counterInput = document.querySelectorAll('.counter__input');
let counterBtn = document.querySelectorAll('.counter__btn');

counterBtn.forEach(item => {item.addEventListener('click', (event) => { checkCount(event) }) });
counterInput.forEach(trigger => trigger.addEventListener('input', (event) => {counterTextCheck(event)},));

function checkCount(event) {
    event.preventDefault();

    const button = event.target.closest('.counter__btn');
    const input =  event.target.closest('.counter').querySelector('.counter__input');
    let counterIndex = parseInt(input.value, 10);

    if (button.dataset.count === 'minus') {
        counterIndex = counterIndex - 1;
        counterIndex = counterIndexChange(counterIndex);
        countValueChange(counterIndex, button);
    } else if (button.dataset.count === 'plus') {
        counterIndex = counterIndex + 1;
        countValueChange(counterIndex, button);
    }
}

function counterIndexChange(index) {
    if (index < 0) {
        return 0;
    } else {
        return index;
    }
}

function countValueChange(value, button) {
    let counter = button.closest('.counter');
    counter = counter.querySelector('.counter__input')

    counter.value = value;
    counter.text = counter.value;

    return value;
}

function counterTextCheck(event) {

    if (!event.target.value.match(/^\d+$/)) {
        event.target.value = 0;
        event.target.text = 0;
    }
}
