export function makeCounter() {
  let count = 0;

  return () => {
    count += 1;
    return count;
  };
}

const x = makeCounter();
console.log(typeof x);
console.log(typeof x());