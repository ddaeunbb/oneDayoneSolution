function solution(arr) {
  let count = 2;
  
  while(true){
      let check = true;
      for(let i = 0; i < arr.length; i++){
          if(count % arr[i] !== 0) check = false;
      }
      
      if(!check) count++;
      if(check) break;
  }
  return count;
}