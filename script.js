const btnEl = document.querySelector(".btn");
const inputEL = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const alert = document.querySelector(".alert");



btnEl.addEventListener("click", () => {
    createPassword();
});

copyIcon.addEventListener("click", () => {
    copyPassword();
    if (inputEL.value){
        alert.classList.remove("active");
        setTimeout(() => {
            alert.classList.add("active");
        }, 2000);
    }
});

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const passwordLength = 16;

    let password = "";

    for(let index = 0; index < passwordLength; index++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    inputEL.value = password;
    alert.innerText = password + " Copied!";

}

function copyPassword() {
    inputEL.select(); 
    inputEL.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEL.value);
}