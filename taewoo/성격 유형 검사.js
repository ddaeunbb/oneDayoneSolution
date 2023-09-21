function solution(survey, choices) {
  // n개의 질문
  // 각 질문에는 7개의 선택지, 선택지마다 유형별 점수 있음
  // 모든 질문의 점수를 더해 각 지표에서 높은 것을 채택, 단 같을 때는 사전순
  // 'AN' : 비동의 관련 선택을 하면 A, 동의 관련 선택하면 N
  let mbtiMap = new Map();
  let result = ['RT', 'CF', 'JM', 'AN'];
  
  survey.forEach((mbti) => {
      mbtiMap.set(mbti[0], 0);
      mbtiMap.set(mbti[1], 0);
  });
  
  choices.forEach((choice, idx) => {
      if (choice < 4) {
          mbtiMap.set(survey[idx][0], mbtiMap.get(survey[idx][0]) + 4 - choice);
      }
      else if (choice > 4) {
          mbtiMap.set(survey[idx][1], mbtiMap.get(survey[idx][1]) + choice - 4);
      }
  });
  
  return result.map((mbti) => {
      if (mbtiMap.get(mbti[0]) < mbtiMap.get(mbti[1])) {
          return mbti[1];
      }
      else {
          return mbti[0];
      }
  }).join('');
}