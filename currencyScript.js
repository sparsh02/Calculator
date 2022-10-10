const convert = document.getElementById('convert');
const result = document.getElementById("result");
const from = document.getElementById("from");
const to = document.getElementById("to");
const amount = document.getElementById("amount");

convert.addEventListener("click",()=>{
    let fromCurrency = from.value;
    let toCurrency  =  to.value;
    let amt = amount.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`).then(response=>{
        return response.json()
    }).then(
        data=>{
            let rate = data.rates[toCurrency];
            let total = amt*rate;
            result.innerHTML = `${amt}of ${fromCurrency} is ${total} of ${toCurrency}`

        }
    );


});
