class BMRCalculator {
    constructor(weight, height, age, gender) {
        this.weight = weight;
        this.height = height;
        this.age = age;
        this.gender = gender;
    }
 
    calculateBmr() {
        // M: BMR = 10W + 6.25H - 5A + 5
        // K: BMR = 10W + 6.25H - 5A - 161
 
        let bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age;
 
        if (this.gender === 'man') {
            bmr += 5;
        } else if (this.gender === 'woman') {
            bmr -= 161;
        }
 
        return bmr;
    }
 
    getResult() {
        const bmr = this.calculateBmr();
 
        const aktywnoscFizyczna = {
            zerowa: bmr * 1.2,
            mala: bmr * 1.375,
            srednia: bmr * 1.55,
            duza: bmr * 1.725,
            bardzoDuza: bmr * 1.9,
        };
 
        return {
            bmr,
            aktywnoscFizyczna,
        };
    }
 }
 
 // selektory dla kalkulatora bmr
 const selectors = {
    gender: document.querySelector('#gender'),
    age: document.querySelector('.age'),
    weight: document.querySelector('.weight'),
    height: document.querySelector('.height'),
    bmrDalej: document.querySelector('.bmr-dalej'),
    work: document.querySelector('.work'),
    goalPage: document.querySelector('.goal'),
    outputSchudnac: document.querySelector('.output-schudnac'),
    outputPrzytyc: document.querySelector('.output-przytyc'),
    outputUtrzymac: document.querySelector('.output-utrzymac'),
    buttonSchudnac: document.querySelector('.schudnac'),
    buttonPrzytyc: document.querySelector('.przytyc'),
    buttonUtrzymac: document.querySelector('.utrzymac-wage'),
    schudnacH2: document.querySelector('.schudnac-h2'),
    przytycH2: document.querySelector('.przytyc-h2'),
    utrzymacH2: document.querySelector('.utrzymac-h2'),
    kalkulatorBmr: document.querySelector('.kalkulator-bmr'),
    workDalej: document.querySelector(".work-dalej"),
    workInput: document.querySelector('#work'),
 };
 
 const landingPage = selectors.kalkulatorBmr;
 const work = selectors.work;
 
 const landingBtn = selectors.bmrDalej;
 
 landingBtn.addEventListener('click', () => {
    const weight = parseFloat(selectors.weight.value);
    const height = parseFloat(selectors.height.value);
    const age = parseInt(selectors.age.value);
    const gender = selectors.gender.value;
 
     if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert('Musisz podać swoją wagę, wzrost oraz wiek w liczbach.');
        return;
     }
     else {
         selectors.kalkulatorBmr.style.display = 'none';
         selectors.work.style.display = 'flex';
     }

     bmrCalculator = new BMRCalculator(weight, height, age, gender);
    
 });
 
 const workButton = selectors.workDalej;
 
 workButton.addEventListener('click', () => {
     const work = selectors.workInput.value;
     
     if(work === ''){
         alert('Musisz wybrać jaką masz aktywność fizyczną w ciągu tygodnia.');
     }
     else{
         
         selectors.work.style.display = 'none';
         selectors.goalPage.style.display = 'flex';
 
     }
 
 });

 const btnSchudnac = selectors.buttonSchudnac;
 const btnPrzytyc = selectors.buttonPrzytyc;
 const btnUtrzymac = selectors.buttonUtrzymac;

const schudnacFunction = () => {
    const work = selectors.workInput.value;
    const result = bmrCalculator.getResult();
    
    let activityLevels;
         switch(work){
             case '1':
                 activityLevels = result.aktywnoscFizyczna.zerowa;
                 break;
             case '2':
                 activityLevels = result.aktywnoscFizyczna.mala;
                 break;
             case '3':
                 activityLevels = result.aktywnoscFizyczna.srednia;
                 break;
             case '4':
                 activityLevels = result.aktywnoscFizyczna.duza;
                 break;
             case '5':
                 activityLevels = result.aktywnoscFizyczna.bardzoDuza;
                 break;
         }
    selectors.schudnacH2.innerHTML = `${(activityLevels -= 400).toFixed()}`;
}

const przytycFunction = () => {
    const work = selectors.workInput.value;
    const result = bmrCalculator.getResult();
    
    let activityLevels;
         switch(work){
             case '1':
                 activityLevels = result.aktywnoscFizyczna.zerowa;
                 break;
             case '2':
                 activityLevels = result.aktywnoscFizyczna.mala;
                 break;
             case '3':
                 activityLevels = result.aktywnoscFizyczna.srednia;
                 break;
             case '4':
                 activityLevels = result.aktywnoscFizyczna.duza;
                 break;
             case '5':
                 activityLevels = result.aktywnoscFizyczna.bardzoDuza;
                 break;
         }
    selectors.przytycH2.innerHTML = `${(activityLevels += 400).toFixed()}`;
}

const utrzymacFunction = () => {
    const work = selectors.workInput.value;
    const result = bmrCalculator.getResult();
    
    let activityLevels;
         switch(work){
             case '1':
                 activityLevels = result.aktywnoscFizyczna.zerowa;
                 break;
             case '2':
                 activityLevels = result.aktywnoscFizyczna.mala;
                 break;
             case '3':
                 activityLevels = result.aktywnoscFizyczna.srednia;
                 break;
             case '4':
                 activityLevels = result.aktywnoscFizyczna.duza;
                 break;
             case '5':
                 activityLevels = result.aktywnoscFizyczna.bardzoDuza;
                 break;
         }
    selectors.utrzymacH2.innerHTML = `${(activityLevels).toFixed()}`;
}

btnSchudnac.addEventListener('click', () => {
    selectors.goalPage.style.display = 'none';
    selectors.outputSchudnac.style.display = 'flex';

    return schudnacFunction();
 });

btnPrzytyc.addEventListener('click', () => {
    selectors.goalPage.style.display = 'none';
    selectors.outputPrzytyc.style.display = 'flex';

    return przytycFunction();
 });

btnUtrzymac.addEventListener('click', () => {
    selectors.goalPage.style.display = 'none';
    selectors.outputUtrzymac.style.display = 'flex';

    return utrzymacFunction();
 });