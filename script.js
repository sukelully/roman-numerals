const inputNum = document.getElementById('number');
const btn = document.getElementById('convert-btn');
const output = document.getElementById('output');

let inputArr;
const resultArr = [];
let tracker = "";
const convert = (num) => {
    if (num === 0) {
        console.log('loop finished');

        return tracker;
    } else if (num % 1000 === 0) {
        tracker += "M";
        console.log(tracker);
        num -= 1000;
    }
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

const updateInputArray = () => {
    let increment = 1;
    for (let i = 0; i < inputArr.length; i++) {
        // if (inputArr[i+1] === '0') {
        //     inputArr[i+1] = 1;
        // }
        inputArr[i] *= increment;
        // console.log(inputArr[i]);
        increment *= 10;
    }
}

const updateOutput = () => {
    if (checkInput(inputNum.value)) {
        return;
    }
    for (let i = 0; i < inputArr.length; i++) {
        console.log(convert(inputArr[i]));
        resultArr[i] = convert(inputArr[i]);
    }
    // tracker = 0;
    output.innerText = resultArr.join('');
}

btn.addEventListener('click', updateOutput);
window.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        updateOutput();
    }
});