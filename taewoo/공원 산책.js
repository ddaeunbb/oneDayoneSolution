function solution(park, routes) {
  let location;
  // S 좌표 찾기
  park.forEach((row, rowIdx) => {
      row.split('').forEach((col, colIdx) => {
          if (col === 'S') {
              location = [rowIdx, colIdx];
          };
      });
  });

  // 주어신 명령에 따라 S 좌표 움직이기
  routes.forEach((route) => {
      if (route[0] === 'N') { // 북쪽일때
          let willLoc = location[0]; // 해당 명령대로 움직일 수 있는지 확실하지 않으니 복사해놓고 검증해야됨 -> 북쪽이기 때문에 행 번호만 검사하면 됨
          for (let i = 0; i < Number(route[route.length - 1]); i++) { // 2만큼 이동한다 해도 중간에 장애물이 있을 수 있으니 한 발짝씩 검토해야됨
              willLoc -= 1; // 한 발짝 움직였을 때
              if (willLoc < 0) { // 지도에서 벗어났을 경우
                  return;
              }
              else if (park[willLoc][location[1]] === 'X') { // 장애물을 만났을 경우
                  return;
              }
          }
          location[0] = willLoc;
      }
      else if (route[0] === 'S') { // 남쪽일때
          let willLoc = location[0];
          for (let i = 0; i < Number(route[route.length - 1]); i++) {
              willLoc += 1;
              if (willLoc > park.length - 1) {
                  return;
              }
              else if (park[willLoc][location[1]] === 'X') {
                  return;
              }
          }
          location[0] = willLoc;
      }
      else if (route[0] === 'W') { // 서쪽일때
          let willLoc = location[1];
          for (let i = 0; i < Number(route[route.length - 1]); i++) {
              willLoc -= 1;
              if (willLoc < 0) {
                  return;
              }
              else if (park[location[0]][willLoc] === 'X') {
                  return;
              }
          }
          location[1] = willLoc;
      }
      else if (route[0] === 'E') { // 동쪽일때
          let willLoc = location[1];
          for (let i = 0; i < Number(route[route.length - 1]); i++) {
              willLoc += 1;
              if (willLoc > park[0].length - 1) {
                  return;
              }
              else if (park[location[0]][willLoc] === 'X') {
                  return;
              }
          }
          location[1] = willLoc;
      }
  })
  return location;
}