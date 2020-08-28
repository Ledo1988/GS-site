//get elements
const dropdownTitle = document.querySelectorAll('.drop-down__result');
const dropdownOptions = document.querySelectorAll('.drop-down__option');

//bind listeners to these elements
dropdownTitle.forEach(item => item.addEventListener('click', toggleDropDownMenuDisplay));
dropdownOptions.forEach(option => option.addEventListener('click', handleDropDownOptionSelected));

function toggleDropDownClass(elem,className){
    if (elem.className.indexOf(className) !== -1){
        elem.className = elem.className.replace(className,'');
    }
    else{
        elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
    }

    return elem;
}

function toggleDropDownMenuDisplay(e){
    const dropdown = e.currentTarget.parentNode;
    const menu = dropdown.querySelector('.drop-down__list');
    const icon = dropdown.querySelector('.drop-down__result-icon');

    toggleDropDownClass(menu,'drop-down__list_hide');
    toggleDropDownClass(icon,'drop-down__result-icon_rotate');
}

function handleDropDownOptionSelected(e){
    toggleDropDownClass(e.target.parentNode, 'drop-down__list_hide');

    const newValue = e.target.textContent + ' ';
    const dropdown = e.target.closest('.drop-down');
    const titleElem = dropdown.querySelector('.drop-down__result');
    const icon = dropdown.querySelector('.drop-down__result-icon');


    titleElem.textContent = newValue;
    titleElem.appendChild(icon);

    //trigger custom event
    dropdown.querySelector('.drop-down__result').dispatchEvent(new Event('change'));
    //setTimeout is used so transition is properly shown
    setTimeout(() => toggleDropDownClass(icon,'drop-down__result-icon_rotate',0));
}