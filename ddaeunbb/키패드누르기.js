function solution(numbers, hand) {
  let left = [0,3];
  let right = [2,3];
  let answer = '';
  let dict = {
      1: [0,0],
      2: [1,0],
      3: [2,0],
      4: [0,1],
      5: [1,1],
      6: [2,1],
      7: [0,2],
      8: [1,2],
      9: [2,2],
      0: [1,3]
  };
  
  for(let i = 0; i < numbers.length; i++){
      if((numbers[i] === 1) || (numbers[i] === 4) || (numbers[i] === 7) ){
          answer+= 'L';
          left = dict[numbers[i]];
      }
      
      else if((numbers[i] === 3) || (numbers[i] === 6) || (numbers[i] === 9) ){
          answer+= 'R';
          right = dict[numbers[i]];
      }        
      
      if((numbers[i] === 2) || (numbers[i] === 5) || (numbers[i] === 8) || (numbers[i] === 0)){
          let xleft = Math.abs(left[0] - dict[numbers[i]][0]);
          let yleft = Math.abs(left[1] - dict[numbers[i]][1]);
          let xright = Math.abs(right[0] - dict[numbers[i]][0]);
          let yright = Math.abs(right[1] - dict[numbers[i]][1]);
          
          let leftSum = xleft +  yleft;
          let rightSum = xright + yright;
          
          if(leftSum > rightSum){
              answer += 'R';
              right = dict[numbers[i]];
          }
          if(leftSum < rightSum ){
              answer+= 'L';
              left = dict[numbers[i]];
          }
          
          if(leftSum === rightSum){
              if(hand === 'right'){
                  answer += 'R';
                  right = dict[numbers[i]];
              } else {
                  answer += 'L';
                  left = dict[numbers[i]];
              }
          }
      }
  }
  return answer
}