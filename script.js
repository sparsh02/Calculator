// var output = document.getElementById('btn1').innerHTML;

// console.log(output);

function getInput(){
    
    var output1 = document.getElementById("btn1").innerHTML
    console.log(output1);
}

//input using class

const inputButton = document.querySelectorAll('[data-number]');
const equalsButton = document.querySelector('[data-equals');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');

let preview = document.querySelector(".result");
let previewHistory = document.querySelector('.history-output')
var a  = new Array();
var b = ""
var inputString="";


inputButton.forEach(i=>{
    i.addEventListener('click', ()=>{
    inputString = `${inputString}${i.innerHTML}`
    console.log(inputString);
    preview.innerHTML = inputString
    
    }) 
})

equalsButton.addEventListener('click',()=>{
    let output = eval(inputString);
    
   preview.innerHTML=output;
   console.log(output);
   previewHistory.innerHTML = inputString;
})

deleteButton.addEventListener('click',()=>{

    inputString=inputString.slice(0,-1);
console.log(inputString);
    
})


allClearButton.addEventListener('click',()=>{
    inputString = "";
    preview.innerHTML = "";

    
})


















