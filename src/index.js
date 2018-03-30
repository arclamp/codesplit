import { text } from 'd3-fetch';

export function add (x, y) {
  return x + y;
}

function delayed (x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2 * x);
    }, 2000);
  });
}

export async function later (x) {
  const val = await delayed(x);
  console.log(val);
}

export async function getText (filename) {
  try {
    const txt = await text(filename);
    console.log(txt);
    return txt;
  } catch (e) {
    console.warn(e);
  }
}
