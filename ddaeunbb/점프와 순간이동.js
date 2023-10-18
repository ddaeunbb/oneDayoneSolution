function solution(n){
  let move = 0;
  
  while (n > 0){
      if( n % 2 ===0) n/=2;
      else {
          n--;
          move++;
      }
  }
  return move
}