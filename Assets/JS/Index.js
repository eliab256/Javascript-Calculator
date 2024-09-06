let NumberComponing = "";
let PartialNumber = "";

//assegnazione const per ogni button HTML
const numberButtons = document.querySelectorAll(".number");
const dotButton = document.querySelector("#dot");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#equal");
const cancelButton = document.querySelector("#allClear");

//assegnazione della variabile JS al valore del risultato sul display HTML
document.querySelector("#result").value = NumberComponing;
document.querySelector("#partialResul").value = PartialNumber;

//funzione che manda a schermo i numeri quando i relativi button vengono cliccati
function NumberButtonClick(event){
    NumberComponing += event.target.value;

    document.querySelector("#result").value = NumberComponing;
}

function OperatorButtonClick(event){
    //permetto di scrivere valori negativi mettendo il - all' inizio e non consentendo agli altri operatori di essere scritti se non c'è un numero
    if(!NumberComponing && event.target.value === "-"){   
        NumberComponing = event.target.value;
        document.querySelector("#result").value = NumberComponing;
    } 
    //permetto di usare gli altri operatori se ho un numero già scritto
    if(NumberComponing && NumberComponing != "-"){       
        PartialNumber = NumberComponing + event.target.value;
        document.querySelector("#partialResul").value = PartialNumber;
        NumberComponing = "";
        document.querySelector("#result").value = NumberComponing;
    }
}

function CancelButtonClick(event){
    NumberComponing = "";
    PartialNumber = "";
    document.querySelector("#result").value = NumberComponing;
    document.querySelector("#partialResul").value = PartialNumber;
}


numberButtons.forEach(button => {
    button.addEventListener('click', NumberButtonClick);
});

operatorButtons.forEach(button => {
    button.addEventListener('click', OperatorButtonClick);
});

cancelButton.addEventListener('click', CancelButtonClick);