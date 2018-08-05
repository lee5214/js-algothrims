// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// iteration
/*function fib(n) {
  let point1 = 0;
  let point2 = 1;
  for (let i = 2; i < n; i++) {
    let temp = point2;
    point2 += point1;
    point1 = temp;
  }
  return point1 + point2;
}*/

// recursion ==> O(2^n) bad!
/*function fib(n) {
  if (n > 1) {
    return fib(n - 1) + fib(n - 2);
  } else {
    return n;
  }
}*/

//tail recursion
/*function fib(n) {
  let rec = (n, prev = 0, next = 1) => {
    if (n === 0) {
      return prev;
    }
    if (n === 1) {
      return next;
    }
    return rec(n - 1, next, prev + next);
  };
  return rec(n);
}*/

//IMPORTANT memoization!
// slowFib is above 2^n solution
// notice that in slobwFib, it returns fib(...) not slowFib(...)
function slowFib(n) {
  if (n > 1) {
    return fib(n - 1) + fib(n - 2);
  } else {
    return n;
  }
}
function memoize(fn) {
  const cache = {};
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

const fib = memoize(slowFib);

module.exports = fib;