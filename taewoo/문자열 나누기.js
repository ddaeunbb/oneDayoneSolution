function solution(s) {
  var answer = 0;
  let x = s[0];
  let same = 0;
  let difer = 0;
  let startIndex = 0;
  s.split('').forEach((alpha, inIdx) => {
      if (x === alpha) same++;
      else if (x !== alpha) difer++;
      if (same !== 0 && difer !== 0 && same === difer) {
          answer++
          startIndex = inIdx + 1;
          same = 0;
          difer = 0;
          x = s[inIdx + 1];
          return;
      }
      if (inIdx === s.length - 1) {
          answer++;
      }
  })

  return answer;
}

// function solution(s) {
//     let answer = 0;
//     let current;
//     let count = 0;

//     for(let i = 0; i < s.length; i++) {
//         if(count === 0) {
//             answer++;
//             current = s[i]
//             count = 1
//         } else {
//             if(current !== s[i]) count--;
//             else count++;
//         }
//     }

//     return answer;
// }