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

//Funzioni innescate dal click di un pulsante

//funzione che manda a schermo i numeri quando i relativi button vengono cliccati
function NumberButtonClick(event){
    if(typeof NumberComponing === "number"){
        CalculatorReset();
    }
    NumberComponing += event.target.value;
    document.querySelector("#result").value = NumberComponing;
}

//funzione che aggiunge il punto per ottenere valori decimali
function DotButtonClick(event){
    if(typeof NumberComponing === "number"){
        CalculatorReset();
    }
    NumberComponing += event.target.value;
    document.querySelector("#result").value = NumberComponing;
}

//funzione che permette di aggiungere gli operatori per fare i calcoli
function OperatorButtonClick(event){
    if(typeof NumberComponing === "number"){
        CalculatorReset();
    }
    //permetto di scrivere valori negativi mettendo il - all' inizio e non consentendo agli altri operatori di essere scritti se non c'è un numero
    if(!NumberComponing && event.target.value === "-"){   
        NumberComponing = event.target.value;
        document.querySelector("#result").value = NumberComponing;
    } 
    //permetto di usare gli altri operatori se ho un numero già scritto
    else if(NumberComponing && NumberComponing !== "-"){       
        PartialNumber += NumberComponing + event.target.value;
        document.querySelector("#partialResul").value = PartialNumber;
        NumberComponing = "";
        document.querySelector("#result").value = NumberComponing;
    }
    //alert in caso si selezione un operatore senza avere numeri 
    else if(!NumberComponing && event.target.value != "-"){
        alert("Se non hai digitato alcun numero l' unico operatore disponibile è il - per ottenere numeri negativi")
    }
}

//funzione che restituisce il risultato di tutta l' operazione
function EqualButtonClick(event){
    if(NumberComponing || PartialNumber){
        if(!NumberComponing){
            NumberComponing = "0";
        }
        let finalResult = eval(PartialNumber + NumberComponing);
        NumberComponing = finalResult;
        PartialNumber = "";
        document.querySelector("#result").value = NumberComponing;
        document.querySelector("#partialResul").value = PartialNumber;
    } else{
        alert("non ci sono operazioni da eseguire")
    }
}

//funzione che cancella tutti i valori a schermo
function CancelButtonClick(event){  
    NumberComponing = "";
    PartialNumber = "";
    document.querySelector("#result").value = NumberComponing;
    document.querySelector("#partialResul").value = PartialNumber;
}

function CalculatorReset(){
    NumberComponing = "";
    PartialNumber = "";
    document.querySelector("#result").value = NumberComponing;
    document.querySelector("#partialResul").value = PartialNumber;
}



//Funzioni trigger click
numberButtons.forEach(button => {
    button.addEventListener('click', NumberButtonClick);
});

dotButton.addEventListener('click', DotButtonClick);

operatorButtons.forEach(button => {
    button.addEventListener('click', OperatorButtonClick);
});

equalButton.addEventListener('click', EqualButtonClick);

cancelButton.addEventListener('click', CancelButtonClick);

