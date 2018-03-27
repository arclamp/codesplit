export const awesomeAdd = (x, y) => x + y;

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
