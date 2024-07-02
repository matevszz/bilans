const btn = document.querySelector('.bmi button');
const landingBmi = document.querySelector('.landing-bmi');
const bmiOutput = document.querySelector('.bmi-output');
const bmiOutputText = document.querySelector('.bmi-output-text');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');

 function calculateBmi() {

    let bmi;

    bmi = ((weight.value / (height.value * height.value)) * 10000).toFixed(1);

    if(weight.value === '' || height.value === '') {
        alert('Musisz podać swoją wagę oraz swój wzrost');
    }
    else if(isNaN(weight.value) || isNaN(height.value)) {
        alert('Musisz podać wartośći w cyfrach');
    }
    else {
        landingBmi.style.display = 'none';
        bmiOutput.style.display = 'flex';
        bmiOutputText.innerHTML = bmi;
    }
}

btn.addEventListener('click', calculateBmi);