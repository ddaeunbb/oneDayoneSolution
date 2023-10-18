function solution (n) {
  return fibonacci(n);
}

const fibonacci = (n) => {
  const dp = new Array(n+1).fill(0);
  dp[0] = 1; dp[1] = 1;
  
  for(let i = 2; i <= n; i++)
    dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
  
  return dp[n];
}

// 피보나치 구현법

function fibonacci(n){
  let newArr = [0,1];

  let fib = (n) => {
    if(newArr[n] !== undefined) return newArr[n];
    newArr[n] = fib(n-1) + fib(n-2);
    return newArr[n];
  }
}

function fibonacci(n){
  const dp = new Array(n+1).fill(0);
  dp[0] = 1; dp[1] = 1;
  for(let i = 2; i <= n; i++){
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
}