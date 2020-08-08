let languageActiveClass = "languages__item_active";
let languageList = document.querySelectorAll('.languages__item'); // Using a class instead, see note below.

languageList.forEach(item => {item.addEventListener('click', () => { checkLanguage(languageList, item) }) });

function checkLanguage(all, el) {
    if (!el.classList.contains(languageActiveClass)) {
        for (var i = 0; i < all.length; i++) {
            all[i].classList.remove(languageActiveClass);
        }
        el.classList.add(languageActiveClass);
    }
}