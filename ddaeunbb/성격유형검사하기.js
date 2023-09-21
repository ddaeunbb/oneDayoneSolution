function solution(survey, choices) {
  const score = { 1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2, 7: 3};
  const dict = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0};
  const len = survey.length;
  let answer = '';
  
  for(let i = 0; i < len; i++){
      if( choices[i] < 4){
          dict[survey[i][0]]+= score[choices[i]];
      }
      else if ( choices[i] > 4){
          dict[survey[i][1]]+= score[choices[i]];
      }
  }
  
  if(dict['R'] >= dict['T']) answer+= 'R';
  else answer+= 'T';
  
  if(dict['C'] >= dict['F']) answer+= 'C';
  else answer+= 'F';
  
  if(dict['J'] >= dict['M']) answer+= 'J';
  else answer+= 'M';
  
  if(dict['A'] >= dict['N']) answer+= 'A';
  else answer+= 'N';
  
  return answer
}