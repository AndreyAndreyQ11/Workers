import { textEnter, textOutput, button } from "./modules/elements.js";
// foo1()
// function heavyСalculation(e) {
//   let number = 0;
//   for (let i = 1; i <= e; i++) {
//     number += i;
//   };
//   console.log(e);
//   return number;
// };
// textOutput.addEventListener('change', test)
let n = Number(textEnter.value);
// let n;
const worker = new Worker('./workers/test.js', {
  type: 'module',
});
// worker.onmessage = error1 => {
//   textOutput.innerHTML = error1.massege;
//   console.log(111111111);
// };
worker.onmessage = event => {
  textOutput.innerHTML = event.data;
  console.log(4, event);
};

textEnter.addEventListener('change', (e) => {
  n = Number(e.target.value);
  console.log(n);
})
button.onclick = function () {
  textOutput.innerHTML = "Ожидайте...";
  console.log(1, n);
  worker.postMessage(n);
  // setTimeout(test, 5);
};
// function test() {
//   console.dir(textOutput)
//   // textOutput.value = heavyСalculation(Number(textEnter.value));

//   textOutput.innerHTML = heavyСalculation(Number(textEnter.value));
// }



