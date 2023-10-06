// 처음에 풀었던 풀이 29점받음
function solution(n,a,b){
  var count = 0;
  let survive = [];
  
  let arr = Array(n).fill(1).map((el,idx)=> el + idx);
  while(arr.length >= 3){
  for(let i = 0; i < arr.length; i+=2){
      if(arr[i+1] === a || arr[i+1] === b) survive.push(arr[i+1]);
      else survive.push(arr[i])
  }
  count++;
  arr = survive;
  survive = [];
  }
  return count+1 
}

function solution(n,a,b) {
  let answer = 0;
  
  while(a !== b) {
      console.log(a,b)
      a = Math.ceil(a/2);
      b = Math.ceil(b/2);
      answer++;
  }

  return answer;
}

console.log(solution(12, 6, 12));

