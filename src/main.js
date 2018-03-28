import { add, later, getText } from '../dist/codesplit';

document.write(`<h1>10 + 3 is ${add(10, 3)}</h1>`);

console.log('calling later()');
later(10);

console.log('calling getText()');
(async function () {
  let txt = await getText('README.md');
  console.log('txt', txt);
}());
