//import { heavyСalculation } from '../script.js'

onmessage = function (e) {
    const num = e.data;
    let result = 0;
    // if (num == Number && num > 0) {

    for (let i = 1; i <= num; i++) {
        result += i;
    };
    console.log(2, num);
    console.log(3, result);
    postMessage(result);
    // } else {
    //     throw new Error('Ведите натуральное число');
    // }
};
