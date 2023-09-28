function solution(numbers, hand) {
  // 1, 4, 7: 오른손 엄지
  // 3, 6, 9: 왼손 엄지
  // 2, 5, 8, 0: 두 엄지 손가락의 현재 위치에서 더 가까운 엄지
  // if 거리가 같다면 오른손잡이는 오른손 엄지, 왼손잡이는 왼손 엄지
  // 키패드 2차원 배열 만들기
  // 현재 손가락 위치 기억할 변수 만들기
  var answer = '';
  let keyPad = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['*', '0', '#' ]];
  let prevL = '*';
  let prevR = '#';
  let obj = {
      '1': {
          '2': 1,
          '5': 2,
          '8': 3,
          '0': 4
      },
      '4': {
          '2': 2,
          '5': 1,
          '8': 2,
          '0': 3
      },
      '7': {
          '2': 3,
          '5': 2,
          '8': 1,
          '0': 2
      },
      '*': {
          '2': 4,
          '5': 3,
          '8': 2,
          '0': 1
      },
      '3': {
          '2': 1,
          '5': 2,
          '8': 3,
          '0': 4
      },
      '6': {
          '2': 2,
          '5': 1,
          '8': 2,
          '0': 3
      },
      '9': {
          '2': 3,
          '5': 2,
          '8': 1,
          '0': 2
      },
      '#': {
          '2': 4,
          '5': 3,
          '8': 2,
          '0': 1
      },
      '2': {
          '2': 0,
          '5': 1,
          '8': 2,
          '0': 3
      },
      '5': {
          '2': 1,
          '5': 0,
          '8': 1,
          '0': 2
      },
      '8': {
          '2': 2,
          '5': 1,
          '8': 0,
          '0': 1
      },
      '0': {
          '2': 3,
          '5': 2,
          '8': 1,
          '0': 0
      },
  };
  
  numbers.forEach((number) => {
      if (number === 1 || number === 4 || number === 7) {
          answer += 'L';
          prevL = String(number);
      }
      else if (number === 3 || number === 6 || number === 9) {
          answer += 'R';
          prevR = String(number);
      }
      else {
          let dist = obj[prevL][String(number)] - obj[prevR][String(number)];
          if (dist > 0) {
              answer += 'R';
              prevR = String(number);
          }
          else if (dist === 0) {
              if (hand === 'right') {
                  answer += 'R';
                  prevR = String(number);
              }
              else {
                  answer += 'L';
                  prevL = String(number);
              }
          }
          else {
              answer += 'L';
              prevL = String(number);
          }
      }
  })
  
  return answer;
}