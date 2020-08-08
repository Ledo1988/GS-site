let counterInput = document.getElementsByClassName('counter__input')[0];
let counterBtn = document.querySelectorAll('.counter__btn');
let counterIndex = 0;

counterBtn.forEach(item => {item.addEventListener('click', () => { checkCount(item) }) });

counterInput.addEventListener('input', function() {counterTextCheck(this)},);

function checkCount(button) {
    if (button.dataset.count === 'minus') {
        counterIndex = counterIndex - 1;
        counterIndexChange(counterIndex);
        countValueChange(counterIndex);
    } else if (button.dataset.count === 'plus') {
        counterIndex = counterIndex + 1;
        countValueChange(counterIndex);
    }
}

function counterIndexChange(index) {
    if (index < 0) {
        counterIndex = 0;
        return counterIndex;
    }
}

function countValueChange(value) {
    counterInput.value = value;
    counterInput.text = counterInput.value;
}

function counterTextCheck(el) {
    if (!el.value.match(/^\d+$/)) {
        el.value = counterIndex;
        el.text = el.value;
    } else {
        counterIndex = parseInt(el.value);
    }
}







