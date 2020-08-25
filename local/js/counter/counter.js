let counterInput = document.querySelectorAll('.counter__input');
let counterBtn = document.querySelectorAll('.counter__btn');
let counterIndex = 0;

counterBtn.forEach(item => {item.addEventListener('click', () => { checkCount(item) }) });

counterInput.forEach(trigger => trigger.addEventListener('input', () => {counterTextCheck(this)},));

function checkCount(button) {


    if (button.dataset.count === 'minus') {
        counterIndex = counterIndex - 1;
        counterIndexChange(counterIndex);
        countValueChange(counterIndex, button);
    } else if (button.dataset.count === 'plus') {
        counterIndex = counterIndex + 1;
        countValueChange(counterIndex, button);
    }
}

function counterIndexChange(index) {
    if (index < 0) {
        counterIndex = 0;
        return counterIndex;
    }
}

function countValueChange(value, button) {
    let counter = button.closest('.counter');
    counter = counter.querySelector('.counter__input')

    counter.value = value;
    counter.text = counter.value;

    return value;
}

function counterTextCheck(el) {
    if (!el.value.match(/^\d+$/)) {
        el.value = counterIndex;
        el.text = el.value;
    } else {
        counterIndex = parseInt(el.value);
    }
}
