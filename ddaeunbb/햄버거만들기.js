function solution(ingredient) {
  let answer = 0;
  let stack = [];
  
  ingredient.forEach((el,i) => {
      stack.push(el);
      
      if(stack.length >=4 && el === 1){
          let burger = stack.slice(stack.length-4,stack.length).join('');
          
          if(burger === '1231'){
              stack.splice(stack.length-4, stack.length);
              answer++;
          }
      }
  })
  return answer
}