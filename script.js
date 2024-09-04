const inputNum = document.getElementById('number');
const btn = document.getElementById('convert-btn');
const output = document.getElementById('output');

let inputArr;
const resultArr = [];

const convert = (num) => {
    if (num === 0) {
        console.log('loop finished');
        return;
    } else if (num < 4) {
        resultArr.push('I');
        convert(num-1);
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
        inputArr[i] *= increment;
        console.log(inputArr[i]);
        increment *= 10;
    }
}

const updateOutput = () => {
    if (checkInput(inputNum.value)) {
        return;
    }
    convert(inputNum.value);
    output.innerText = resultArr.join('');
}

btn.addEventListener('click', updateOutput);
window.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        updateOutput();
    }
});