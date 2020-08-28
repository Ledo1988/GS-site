const fileUploader = document.querySelectorAll('.file-uploader')
console.log(fileUploader)
fileUploader.forEach(item => {item.addEventListener('click', () => { fileUploaderHandle(item)})})

function fileUploaderHandle(item) {
    const mainBox = item
    const inputTitle = mainBox.querySelector('.file-uploader__title')
    const input = mainBox.querySelector('.file-uploader__input')

    if (input.files.length !== 0) {
        console.log(inputTitle.text )
        inputTitle.text = "Вложение прикреплено"
    } else {
        inputTitle.text = "Прикрепить вложение"
    }
}