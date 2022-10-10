const loanAmt = document.getElementById('loanInput')
const interestRate = document.getElementById('interestInput')
const yearInp = document.getElementById('yearInput');
const result = document.getElementById('result')

const calculate = document.getElementById('calculate');

calculate.addEventListener('click',()=>{
    let loan = loanAmt.value 
    let interest  = interestRate.value
    let year = yearInp.value
    let url = `https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=${loan}&interest_rate=${interest}&duration_years=${year}`

    fetch(url,{headers: {
        'X-Api-Key': 'hCX44T9ub0DkaKrhZaLoog==2sPpvK06kDmBh41o'
      }}).then(response=>{
        return response.json()
      }).then(data=>{
        console.log(data);
        result.innerHTML = `The mortgage amount is ${data.annual_payment.mortgage}`
        
      })

});