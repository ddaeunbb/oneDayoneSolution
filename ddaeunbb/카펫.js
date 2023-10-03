function solution(brown, yellow) { 
  // 약수를 구하고 약수마다 너비구해
  // 그리고 yellow 뺀값 = brown
  for(let i = 1; i <= yellow; i++){
      if(yellow % i === 0){
          let x = i + 2;
          let y = (yellow / i) + 2;
          let width = x * y;
          if(width - yellow === brown) return [y,x]
      }
  }
}