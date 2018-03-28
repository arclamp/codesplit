import { awesomeAdd, later } from '../dist/codesplit';

document.write(`<h1>10 + 3 is ${awesomeAdd(10, 3)}</h1>`);

console.log('calling later()');
later(10);
