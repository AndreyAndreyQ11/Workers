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


textEnter.addEventListener('change', (e) => {
  n = Number(e.target.value);
})
button.onclick = function () {
  const worker = new Worker('./workers/test.js', {
    type: 'module',
  });
  textOutput.innerHTML = "Ожидайте...";
  textOutput.style.height = 17 + "px";
  worker.postMessage(n);


  worker.onmessage = event => {
    // console.log('3', event.data);
    textOutput.innerHTML = event.data;
    worker.terminate();
  };

  worker.onerror = error => {
    textOutput.innerHTML = error.message;
    textOutput.style.height = 17 * 2 + "px";
    worker.terminate();
  };
};





