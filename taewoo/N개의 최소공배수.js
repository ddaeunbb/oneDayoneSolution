function solution(arr) {
  // 2와 7의 최소 공배수는 14
  // n개의 수의 최소공배수는 n개의 수들의 배수 중 공통이 되는 가장 작은 숫자
  // arr: n개의 숫자를 담은 배열
  // arr의 요소들의 최소공배수를 반환
  // 유클리드 호제법
  // 최대공약수(GCD): 두 수 a, b(a > b)에 대해 a를 b로 나눈 나머지를 r이라고 했을 때,
  //                  a와 b의 최대 공약수는 b와 r의 최대 공약수와 같다.
  // 이게 뭔소리지? 싶다면 더 보자
  // GCD(581, 322)일 때 r(나머지) = 259이다. 즉, GCD(581, 322) = GCD(322, 259)이다.그럼 다시 GCD(322, 259)를 보면 r=63이다. GCD(581, 322) = GCD(322, 259) = GCD(259, 63)이다. 또 다시 하면 r=7이다. 따라서 GCD(581, 322) = GCD(322, 259) = GCD(259, 63) = GCD(63, 7)이다. 마지막으로 하면 r=0이다. 따라서 GCD(581, 322) = GCD(322, 259) = GCD(259, 63) = GCD(63, 7) = GCD(7, 0)이다.

  var answer = lcm(arr[0], arr[1]);
  var newArr = arr.slice(2);
  
  for (var i = 0; i < newArr.length; i++) {
    answer = lcm(answer, newArr[i]);
  }

  return answer;
}

function gcd(num1, num2) {
  var k;
  while (num2 !== 0) {
      k = num1 % num2;
      num1 = num2;
      num2 = k;
  }
  return num1;
}

function lcm(num1, num2) {
  return num1 * num2 / gcd(num1, num2);
}