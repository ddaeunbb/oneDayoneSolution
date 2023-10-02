// 공식활용 풀이
function solution(n){
  let answer = 1;

  for(let i = 1; i < n; i++){
    if( n % i === 0 && i & 2 === 1) answer++;
  }
  return answer;
}


// 완전 탐색 풀이
function solution(n) {
  var answer = 0;
  
  for(let i = 1; i <= n; i++){
      var sum = 0;
      for(let j = i; j <= n; j++){
          sum+= j;
          if(sum === n){
              answer++;
              break;
          }
          if( sum > n) break;
      }
  }
  return answer
}