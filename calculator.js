
let calValue = '';
let calculatorResult = document.getElementById('calculatorResult');

let bgButton = document.querySelectorAll('button');
//console.log(bgButton);

Array.from(bgButton).forEach((calButton)=>{
    //console.log(calButton);

    calButton.addEventListener("click", ()=>{
        //console.log(calButton.innerHTML);

        if(calButton.innerHTML == '='){
            calValue = eval(calValue);
            calculatorResult.value = calValue;
        }

        else if(calButton.innerHTML == 'CE'){
            calValue = '';
            calculatorResult.value = calValue;
        }
        else if(calButton.innerHTML == 'DEL'){
            calValue = calculatorResult.value.slice(0,-1);
            calculatorResult.value = calValue;
        }
        else{
        calValue = calValue + calButton.innerHTML;
        calculatorResult.value = calValue;
        }
    })
});