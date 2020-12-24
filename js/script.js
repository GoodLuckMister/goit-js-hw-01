const butAdd = document.querySelector('button[data-Button]');
const valueAddText = document.querySelector('input[data-Text]');
const valueAddNumber = document.querySelector('input[data-Number]');

butAdd.addEventListener('click', () => {
    console.log('ececeece');
    console.log(valueAddNumber.value);
    console.log(valueAddText.value);
})
