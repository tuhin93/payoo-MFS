
// document.getElementById('btn-login')
//     .addEventListener('click', function (event) {
//         event.preventDefault();
//         const phoneNumber = document.getElementById('phone-number').value;
//         const pinNumber = document.getElementById('pin-number').value;
//         // console.log('Your phone number is', phoneNumber, 'and your pin number is', pinNumber);
//         if(phoneNumber === '01825555893' && pinNumber === '1111'){
//             console.log('You are logged in');
//         }
//         else{
//             alert('Wrong number or password')
//         }
//     })
document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if (phoneNumber === '017' && pinNumber === '0000') {
        window.location.href = '/home.html';
    }
    else{
        alert('You entered wrong info');
    }
})