const butAdd = document.querySelector('button[data-Button]');
const valueAddText = document.querySelector('input[data-Text]');
const valueAddNumber = document.querySelector('input[data-Number]');

butAdd.addEventListener('click', () => {
    console.log('gogogo');
    console.log(`Number: ${valueAddNumber.value}`);
    console.log(`Text: ${valueAddText.value}`);
})
