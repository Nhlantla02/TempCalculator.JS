let btnSubmit = document.getElementById('convert');
let btnReset = document.getElementById('clear');

function tempConvert() {

    let fahrenheit = document.getElementById("fahrenheit").value;
    let celsius = document.getElementById("celsius").value;

    if (fahrenheit != '') {
        celsius = (parseFloat(fahrenheit)- 32) / 1.8;
    } else {
        fahrenheit = (parseFloat(celsius)* 1.8) + 32;
    }
    document.querySelector('[data-output]').textContent = celsius
    // document.getElementById('fahrenheit').value = parseFloat('fahrenheit').toFixed(1);
    // document.getElementById('celsius').value = parseFloat('celsius').toFixed(1);

}

function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
}

btnSubmit.addEventListener('click', tempConvert);
btnReset.addEventListener('click', clearForm);