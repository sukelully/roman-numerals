const inputNum = document.getElementById('number');
const btn = document.getElementById('convert-btn');
const output = document.getElementById('output');

let inputArr;
const resultArr = [];

const convert = (num) => {
    if (num === 0) {
        return;
    } else if (num % 1000 === 0) {
        return "M".repeat(num / 1000);
    } else if (num % 900 === 0) {
        return "CM".repeat(num / 900);
    } else if (num % 500 === 0) {
        return "D".repeat(num / 500);
    } else if (num % 400 === 0) {
        return "CD".repeat(num / 400);
    } else if (num % 100 === 0) {
        return "C".repeat(num / 100);
    } else if (num % 90 === 0) {
        return "XC".repeat(num / 90);
    } else if (num % 50 === 0) {
        return "L".repeat(num / 50);
    } else if (num % 40 === 0) {
        return "XL".repeat(num / 40);
    } else if (num % 10 === 0) {
        return "X".repeat(num / 10);
    } else if (num % 9 === 0) {
        return "IX".repeat(num / 9);
    } else if (num % 5 === 0) {
        return "V".repeat(num / 5);
    } else if (num % 4 === 0) {
        return "IV".repeat(num / 4);
    } else if (num % 1 === 0) {
        return "I".repeat(num / 1);
    } else {
        console.log("ERROR: Default case triggered");
        return;
    }
}


const updateInputArray = () => {
    let increment = 1;
    for (let i = 0; i < inputArr.length; i++) {
        inputArr[i] *= increment;
        increment *= 10;
    }
}

const updateOutput = () => {
    if (checkInput(inputNum.value)) {
        return;
    }
    for (let i = 0; i < inputArr.length; i++) {
        resultArr[i] = convert(inputArr[i]);
    }
    output.innerText = resultArr.reverse().join('');
}

const checkInput = (num) => {
    if (num < 1) {
        output.innerText = "Please enter a number greater than or equal to 1";
        console.log("Please enter a number greater than or equal to 1");
        return true;
    } else if (num >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
        console.log("Please enter a number less than or equal to 3999");
        return true;
    }
    inputArr = num.split('').reverse();;
    updateInputArray();
}

btn.addEventListener('click', updateOutput);
window.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        updateOutput();
    }
});