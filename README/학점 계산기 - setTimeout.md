# setTimeout

- ### window 객체

  - `window`에는 많은 메서드들이 존재
  - `window`는 디폴트 개념이라 생략 가능

  ```javascript
  window.setTimeout()
  setTimeout() // window는 전역객체라서 생략가능
  ```



- ### setTimeout 활용

  - 낮설게 동작
  - 인자로 함수를 받음
  - `콜백함수` : 나중에 실행되는 함수
  - JavaScript는 `함수`를 **인자**로 받을 수 있음
  - **함수를 반환할 수도 있음**

  ```javascript
  function run() {
      setTimeout(function() {
          var msg = "hello codesuqard";
          console.log(msg); // 이 메세지는 즉시 실행되지 않습니다
      }, 1000);
  }
  run();
  ```

  - **지연실행이 필요한 경우** 활용하면 좋음



- ### setTimeout 실행 순서

  - 비동기(asynchronous)로 실행되어 동기적인 다른 실행이 끝나야 실행됨

  ```
  function run() {
      console.log("start");
      setTimeout(function() {
          var msg = "hello codesquard";
          console.log(msg);
      }, 1000);
      console.log("end");
  }

  run();
  ```

  - setTimeout 안의 함수(콜백함수)는 **run함수의 실행이 끝나고 나서**
    - 정확히는 **stack에 쌓여있는 함수의 실행이 끝나고 나서**
  - 실행됨



- ### 좀더 해볼만한 것

  - 자바스크립트 비동기 예제를 더 찾아볼 것
    - setTimeout과 비슷하게 동작하는것들이 무엇이 있는지
  - setInterval 이라는 메서드를 알아볼 것