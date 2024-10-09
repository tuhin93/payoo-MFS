// document.getElementById('ad-money').addEventListener('click', function (event){}){
//     event.preventDefault();
//     const inputAmount = document.getElementById('input-amount').value;
//     const inputPin = document.getElementById('input-pin').value;
//     if (inputPin === '1234') {
//         const newAmount = inputAmount + balance;
//         console.log(newAmount);
//     }
//     else{
//         alert('Your info is wrong try again!')
//     }

// }

document.getElementById('ad-money').addEventListener('click', function (event) {
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount').value;
    const inputPin = document.getElementById('input-pin').value;
    if (inputPin === '1234') {
        const balance = document.getElementById('balance').innerText;
        const newBalance = parseFloat(balance) + parseFloat(inputAmount);
        document.getElementById('balance').innerText = newBalance;
    }
    else {
        alert('Your PIN is incorrect try again!')
    }
})

document.getElementById('cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount').value;
    const pin = document.getElementById('input-pin').value;
    const balance = document.getElementById('balance').innerText;
    if(pin != '1234'){
        alert('Try again later!');
    }
    else{
        const newBalance = parseFloat(balance) - parseFloat(inputAmount);
        document.getElementById('balance').innerText = newBalance;
    }
    
})