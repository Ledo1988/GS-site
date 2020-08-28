const detailedTotal = document.querySelectorAll('.catalog-detailed__total-item');

window.onload = function(e){
    console.log(document.querySelector('.catalog-detailed__total'))
    if (document.querySelector('.catalog-detailed__total')) {
        detailedTotal.forEach(item => {
            const percent = item.querySelector('.catalog-detailed__total-percent').dataset.percent;
            item.querySelector('.catalog-detailed__total-item-border').style.width = percent + '%';

            if (percent <= 25) {
                item.classList.add('catalog-detailed__total-item_red')
            } else if (percent <= 50) {
                item.classList.add('catalog-detailed__total-item_orange')
            } else if (percent <= 75) {
                item.classList.add('catalog-detailed__total-item_blue')
            } else {
                item.classList.add('catalog-detailed__total-item_green')
            }
        })
    }
}