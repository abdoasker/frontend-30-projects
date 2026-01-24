const passwordBox=document.getElementById("password");
const lenght=40;
const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase='abcdefghijklmnopqrstuvwxyz';
const numbers='0123456789';
const symbols='!@#$%^&*()_+~`|}{[]:;?><,./-=';
let allCharacters=upperCase+lowerCase+numbers+symbols;

function creatPassword(){
let password=0;
password += upperCase[Math.floor(Math.random()*upperCase.length)];
password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
password += numbers[Math.floor(Math.random()*numbers.length)];
password += symbols[Math.floor(Math.random()*symbols.length)];

while(lenght> password.length){
    password += allCharacters[Math.floor(Math.random()*allCharacters.length)];

}
passwordBox.value=password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand('copy');
    alert('Password copied to clipboard');
}