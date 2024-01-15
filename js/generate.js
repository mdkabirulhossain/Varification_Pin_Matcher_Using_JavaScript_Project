//Function for Generate pin
function generatePin(){
    const randomnumber = Math.round(Math.random()*10000);
   return randomnumber;
   //If we want then check here randomnumber 4 digit or not OR create another function for check random 4 digit or not
}
function getpin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }else{
        return getpin();
    }
}


// call for Generate Pin
document.getElementById('btn_generate').addEventListener('click', function(){
   const actualPin = getpin();
   const getInputField = document.getElementById('generate_input_field');
   getInputField.value = actualPin;
})


//Calculator
document.getElementById('access_number').addEventListener('click', function(event){
    const clickButton = event.target.innerText;
    const getCalculatorField = document.getElementById('calculator_field');
    const getCalculatorFieldValue = getCalculatorField.value;

    if(isNaN(clickButton)){
        if(clickButton === 'C'){
            getCalculatorField.value = '';
        }
        else if(clickButton === '<'){
            const removelastValue = getCalculatorFieldValue.split('');
            removelastValue.pop();
            const updateValue = removelastValue.join('');
            getCalculatorField.value = updateValue;
        }
        
    }else{
        const updateCalculatorfield = getCalculatorFieldValue + clickButton;
        getCalculatorField.value = updateCalculatorfield;
    }
    
})

// submit
document.getElementById('submit_btn').addEventListener('click', function(){
    const getPin = document.getElementById('generate_input_field');
    const getpinValue = getPin.value;
    const getFieldValue = document.getElementById('calculator_field');
    const getdValue = getFieldValue.value;
    if(getpinValue == getdValue){
        const matchid = document.getElementById('match');
        matchid.style.display = 'block';
        //hide not match error notification
        const notMatch = document.getElementById("not_match");
        notMatch.style.display = 'none';
    }
    else{
        const notMatch = document.getElementById("not_match");
        notMatch.style.display = 'block';
        //Hide match notification
        const matchid = document.getElementById('match');
        matchid.style.display = 'none';
    }
})