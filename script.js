//Fibonacci sequence
/*
function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i <= n; i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}


console.log(fibonacci(7))

*/
/* 
1. Initilizing fib=[0,1]
2.Iteration 1:(i=2): fib[2]=fib[1]+fib[0]=1+0=1
3.Iteration 2:(i=3): fib[3]=fib[2]+fib[1]=1+1=2
4.Iteration 3:(i=4): fib[4]=fib[3]+fib[2]=2+1=3
5.Iteration 4:(i=5): fib[5]=fib[4]+fib[3]=3+2=5
6.Iteration 5:(i=6): fib[6]=fib[5]+fib[4]=5+3=8
7.Iteration 6:(i=7): fib[7]=fib[6]+fib[5]=8+5=13
*/

///////////////////////////////////////////////////////
//Factorial of a number
/*
function factorial(n) {
  let fact = 1;
  for (let index = 2; index <= n; index++) {
    fact = fact * index;
  }
  return fact;
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(6));
*/

/*
1. Insilization fact =1;
2. Iteration 1  fact = 1*2=2
3. Iteration 2  fact = 2*3=6
4. Iteration 3  fact = 6*4=24
5. Iteratoin 4  fact = 24*5=120
*/
/////////////////////////////////////////////////
//Prime Number
/*
function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < n; i++){
        if (n % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(29))
*/