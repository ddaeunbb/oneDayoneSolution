// 내가 푼 풀이
function solution(keymap, targets) {
  const dict = {};
  keymap.forEach(key => {
      let spell = key.split('');
      spell.forEach((el,idx) => {
          if(dict[el] === undefined) dict[el] = idx+1;
          if(dict[el] > idx+1) dict[el] = idx+1;
      })
  })
  
  let answer = [];
  targets.forEach(target => {
      let sum = 0;
      for(let piece of target){
          if(dict[piece] === undefined){
              sum = -1; break;
          }
          else sum += dict[piece];
      }
      answer.push(sum);
  })
  return answer
}

// 더 좋은 답안
// function solution(keymap, targets){
//   const answer = [];
//   const map = {};
  
//   for(const items of keymap){
//     items.split('').map((item,idx)=> map[item] = (map[item] < idx +1 ? map[item] : idx+1));
//   }

//   for(const items of targets){
//     answer.push(items.split('').reduce((cur, item) => cur += map[item], 0) || -1)
//   }
//   return answer;
// }