function solution(n, words) {
  const dict = {};
  let count  = 0;
  let last = '';
  
  for(let i = 0; i < words.length; i++){
      count = (i+1) % n;
      if( count === 0) count = n;
      
      if( i > 0 && last !== words[i][0]) return [count, Math.ceil( (i+1) / n)]
      
      if(dict[words[i]] ===  undefined) dict[words[i]] = true;
      else if(dict[words[i]] === true){
          return [count, Math.ceil( (i+1) / n)]
      }
      
      last = words[i].slice(-1);
  }
  return [0,0]
}