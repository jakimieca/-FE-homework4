
const rateEUR = 4.34;
const rateUSD = 4.03;
const rateCHF = 4.57;


let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let result = document.querySelector(".js-result");

let tableEUR = document.querySelector("js-rateEUR");
let tableUSD = document.querySelector("js-rateUSD");
let tableCHF = document.querySelector("js-rateCHF");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value; //+ przed value konwertuje tekst na liczbę
    let currency = currencyElement.value;
    let totalAmount = 0;

    console.log(amount, currency);

    if (currency === "EUR") {
        totalAmount = amount / rateEUR;
        console.log(totalAmount);
        result.innerHTML = `${amount} PLN = <strong>${totalAmount.toFixed(2)} ${currency}</strong>`;

    }
    else if (currency === "USD") {
        totalAmount = amount / rateUSD;
        console.log(totalAmount);
        result.innerHTML = `${amount} PLN = <strong>${totalAmount.toFixed(2)} ${currency}</strong>`;

    }
    else{
        totalAmount = amount / rateCHF;
        console.log(totalAmount);
        result.innerHTML = `${amount} PLN = <strong>${totalAmount.toFixed(2)} ${currency}</strong>`;
    }



 

})







