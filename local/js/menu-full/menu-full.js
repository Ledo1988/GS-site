const menuFullLink = document.querySelectorAll(".menu-full__link");
const menuFullReturnLink = document.querySelector(".menu-full__action-link_return");
const menuFullCloseLink = document.querySelector(".menu-full__action-link_close");
const menuFullModal = document.querySelector('.menu-full.modal');

menuFullLink.forEach(item => {
    item.addEventListener('click', (event) => { menuFullLinkCheck(event) }) });

menuFullReturnLink.addEventListener('click', () => { menuFullReturnAction() });

menuFullCloseLink.addEventListener('click', () => { menuFullCloseAction() });

function menuFullLinkCheck(event) {
    const eventTarget = event.target.closest('.menu-full__link');
    const eventParent = event.target.closest('.menu-full__item_extra');
    const eventModal = event.target.closest('.modal');

    if (!eventParent
        || (eventTarget.classList.contains('opened') && eventParent.classList.contains('menu-full__item_opened'))
        || eventModal.classList.contains('modal_col-2')) {

        return true;

    } else if (eventTarget.classList.contains('opened') && !eventParent.classList.contains('menu-full__item_opened')) {

    } else if (eventModal.classList.contains('modal_col-1')) {
        event.preventDefault();
        eventTarget.classList.add('opened');
        eventParent.classList.add('menu-full__item_opened');
        eventTarget.closest('.modal_col-1').classList.add('modal_col-2');
        eventTarget.closest('.modal_col-1').classList.remove('modal_col-1');
    } else if (eventModal.classList.contains('modal')) {
        event.preventDefault();
        eventTarget.classList.add('opened');
        eventParent.classList.add('menu-full__item_opened');
        eventTarget.closest('.modal').classList.add('modal_overflow-visible');
        eventTarget.closest('.modal').classList.add('modal_col-1');
    } else {
        return true;
    }
}

function menuFullReturnAction() {

    const menuExtraOpened = document.querySelectorAll(".menu-full__item_opened");
    const menuExtraOpenedLast = menuExtraOpened[menuExtraOpened.length - 1];

    if (menuFullModal.classList.contains('modal_col-2')) {

        menuFullModal.classList.remove('modal_col-2')
    } else if (menuFullModal.classList.contains('modal_col-1')) {
        menuFullModal.classList.remove('modal_col-1')
    } else if (menuFullModal.classList.contains('modal_overflow-visible')) {
        menuFullModal.classList.remove('modal_overflow-visible')
    }

    console.log(menuExtraOpenedLast);
    menuExtraOpenedLast.querySelector(".menu-full__link").classList.remove('opened');
    menuExtraOpenedLast.classList.remove('menu-full__item_opened');

}

function  menuFullCloseAction() {
    if (menuFullLink !== undefined || menuFullModal !== undefined) {
        menuFullLink.forEach(item => { item.classList.remove('opened')  });
        document.querySelectorAll('.menu-full__item_extra').forEach(
            item => { item.classList.remove('menu-full__item_opened')  });
        menuFullModal.classList.remove('modal_overflow-visible');
        menuFullModal.classList.remove('modal_col-1');
        menuFullModal.classList.remove('modal_col-2');
    }
}



