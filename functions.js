function login(){
    let username = document.getElementById('emailPhone_login').value;
    let password = document.getElementById('password_login').value;
    alert("Successfully logged In");
}

function register(){
    let firstName = document.getElementById('firstName').value;
    let surname = document.getElementById('surname').value;
    let mobileEmail = document.getElementById('mobileEmail').value;
    let date = document.getElementById('date').value;
    let isMale = document.getElementById('MALE').checked;
    let isFemale = document.getElementById('FEMALE').checked;
    let isOthers = document.getElementById('OTHERS').checked;
    console.log(firstName, surname, mobileEmail, date, isMale, isFemale, isOthers)
    alert("Successfully Signed up");
}