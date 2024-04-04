document.querySelector('#sameAddress').addEventListener('click', function() {
    console.log('this works');
    if (this.checked) {
        console.log(document.querySelector('#home').value);
        document.querySelector('#home').value = document.querySelector('#bill').value;
        document.querySelector('#home').disabled = true;
    } 
    else {
        console.log('not checked')
        document.querySelector('#home').value = '';
        document.querySelector('#home').disabled = false;
    }
})