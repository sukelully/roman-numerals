const inputNum = document.getElementById('number');
const btn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const numArr = [];

const convert = (num) => {
    console.log(num);
    if (num === 0) {
        console.log('loop finished');
        return;
    } else if (num > 3) {

    }
}

const parseInput = (num) => {
    if (num < 1) {
        output.innerText = "Please enter a number greater than or equal to 1"
        return true;
    }
}

const updateOutput = () => {
    if (parseInput(inputNum.value)) {
        return;
    }
    convert();
    output.innerText = inputNum.value;
}

btn.addEventListener('click', updateOutput);
window.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        updateOutput();
    }
});