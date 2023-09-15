// 문자열나누기

// 내가 푼 문제
function solution(s) {
  const answer = [];
  let first = 0;
  let other = 0;
  let firstText = s[0];
  let firstIdx = 0;

  for(let i=0; i<s.length; i++){        
      if(s[i] === firstText) first++;
      else other++;
      
      if(first !== 0 && other !== 0 && first === other){
          answer.push('O');
          first = 0;
          other = 0;
          firstText = s[i+1];
          firstIdx = i+1;
          continue
      }
      
      if(i === s.length-1) answer.push(s[i]);
  }
  return answer.length;
}

// 다른 사람 풀이
function solution(s) {
  let answer = 0;
  let current;
  let count = 0;

  for(let i = 0; i < s.length; i++) {
      if(count === 0) {
          answer++;
          current = s[i]
          count = 1
      } else {
          if(current !== s[i]) count--;
          else count++;
      }
  }

  return answer;
}