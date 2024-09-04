const inputNum = document.getElementById('number');
const btn = document.getElementById('convert-btn');
const output = document.getElementById('output');

let inputArr;
const resultArr = [];
let tracker = "";
const convert = (num) => {
    if (num === 0) {
        return;
    } else if (num % 1000 === 0) {
        return "M".repeat(num / 1000);
    } else if (num % 100 === 0) {
        return "C".repeat(num / 100);
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
        tracker = "";
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