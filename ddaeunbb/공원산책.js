function solution(park, routes) {
    let pos = [0, 0];
    const dict = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0]
    };
    
  // 시작 위치 찾기
  for(let i = 0; i < park.length; i++) {
      const findedIdx = park[i].indexOf('S');
      if(findedIdx > -1) {
          pos = [i, findedIdx];
          break;
      }
  }
  

  routes.forEach((route, index) => {
      const [op, n] = route.split(' ');
      const tempPos = [...pos];
      let no = false;
      
      for(let i = 0; i < n; i++) {
          tempPos[0] += dict[op][0];
          tempPos[1] += dict[op][1];
          
          if((tempPos[0] < 0) || (tempPos[0] > park.length - 1) ||
              (tempPos[1] < 0) || (tempPos[1] > park[0].length - 1)) {
              no = true;
              break;
          }
          
          if(park[tempPos[0]][tempPos[1]] === 'X') {
              no = true;
              break;
          }
      }
      
      if(!no) {
          pos = tempPos;
      }
      
  })
  
  return pos;
}

// 처음에 풀이했던 나의 풀이..
// function solution(park, routes) {
//   let start;
//   let length;
//   park.forEach((line,idx) => {
//       if(line.includes('S')){
//           length = idx;
//           let search = line.split('');
//           let breadth = search.indexOf('S');
//           start = [length, breadth];
//       }
//   })
  
//   routes.forEach(direct => {
//       let check = direct.split(' ');
//       let go = true;
//       if (check[0] === 'E'){
//           for(let i = start[1]; i <= start[1] + Number(check[1]); i++){
//               if (park[start[0],i] === 'X') return go = false
//           }
//           if (go) start = [start[0], start[1] + Number(check[1])];
//       }

//       if (check[0] === 'W'){
//         for(let i = start[1] - Number(check[1]); i <= start[1]; i++){
//             if (park[start[0],i] === 'X') return go = false
//         }
//         if (go) start = [start[0], start[1] - Number(check[1])];
//     }

//     if (check[0] === 'S'){
//       for(let i = start[0]; i <= start[0] + Number(check[1]); i++){
//           if (park[i, start[1]] === 'X') return go = false
//       }
//       if (go) start = [start[0]+ Number(check[1]), start[1]];
//   }

//   if (check[0] === 'N'){
//       for(let i = start[0] - Number(check[1]); i <= start[0]; i++){
//           if (park[i, start[1]] === 'X') return go = false
//       }
//       if (go) start = [start[0] - Number(check[1]), start[1]];
//   }
//   })
//   return start
// }