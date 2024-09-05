let NumberComponing = "";

//assegnazione const per ogni button HTML
const numberButtons = document.querySelectorAll(".number");
const dotButton = document.querySelector("#dot");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#equal");
const cancelButtons = document.querySelector("#allClear");

//assegnazione della variabile JS al valore del risultato sul display HTML
document.querySelector("#result").value = NumberComponing;

//funzione che manda a schermo i numeri quando i relativi button vengono cliccati
function NumberButtonClick(event){
    NumberComponing += event.target.value;

    document.querySelector("#result").value = NumberComponing;
}

function OperatorButtonClick(event){
    if(!NumberComponing && event.target.value === "-"){
        NumberComponing = event.target.value;
        document.querySelector("#result").value = NumberComponing;
    } 
    if(NumberComponing){
        NumberComponing += event.target.value;
        document.querySelector("#Result").value = NumberComponing;
    }

    

}




numberButtons.forEach(button => {
    button.addEventListener('click', NumberButtonClick);
});

operatorButtons.forEach(button => {
    button.addEventListener('click', OperatorButtonClick);
});