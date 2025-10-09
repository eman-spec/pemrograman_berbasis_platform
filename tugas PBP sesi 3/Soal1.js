function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function nextPrime(n) {
    let next = n + 1; 
    while (!isPrime(next)) {
        next++; 
    }
    return next;
}

let input = 15;
let hasil = nextPrime(input);
console.log(`Bilangan prima setelah ${input} adalah ${hasil}`);
