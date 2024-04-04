const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const label4 = document.getElementById("label4");
const label5 = document.getElementById("label5");
const min = 1;
const max = 6;

myButton.onclick = function(){
    let randomNumber1 = Math.floor(Math.random() * (max - min + 1) + min);
    label1.textContent = randomNumber1;

    let randomNumber2 = Math.floor(Math.random() * (max - min + 1) + min);
    label2.textContent = randomNumber2;

    let randomNumber3 = Math.floor(Math.random() * (max - min + 1) + min);
    label3.textContent = randomNumber3;

    let randomNumber4 = Math.floor(Math.random() * (max - min + 1) + min);
    label4.textContent = randomNumber4;

    let randomNumber5 = Math.floor(Math.random() * (max - min + 1) + min);
    label5.textContent = randomNumber5;
}
