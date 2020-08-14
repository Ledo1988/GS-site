const resultView = document.querySelector('.configurator-result__view');
const inputView = resultView.querySelectorAll('.input-view__input');

inputView.forEach(input => {
    input.addEventListener('change', (event) => { inputViewCheck(event) }) });

function inputViewCheck (event) {
    let input = event.target;
    let isChecked = input.checked;
    let configurator = input.closest('.configurator');
    let configuratorItems = configurator.querySelector('.configurator__items');

    console.log(isChecked)
    console.log(input.value)
    console.log(configuratorItems.classList.contains('configurator__items_one-col'))

    if (isChecked && input.value == 'column' && configuratorItems.classList.contains('configurator__items_one-col')) {
        return false;
    } else {
        configuratorItems.classList.toggle('configurator__items_one-col')
    }
}