# 숫자 야구 게임

## 기능 목록

- [x] 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. -> NumberGenerator
- [x] 컴퓨터의 수와 플레이어의 수를 비교할 수 있다. -> NumberComparator
  - [ ] 3자리 숫자가 모두 같을 경우 "3스트라이크" 표시
  - [ ] 3자리 숫자가 모두 다를 경우 "낫싱" 표시
  - [ ] 위 두가지가 아닌 경우 입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시
    - [ ] 같은 수가 같은 자리에 있으면 스트라이크
    - [ ] 같은 수가 다른 자리에 있으면 볼

## 예외 처리 사항

- [x] 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시킨후 애플리케이션은 종료
  - [x] 서로 다른 3자리의 수가 아닌 경우
  - [x] 게임이 끝난 경우 재시작/종료를 구분하는 1과 2 중 하나의 수가 아닌 경우

## 객체(MVC구조)

### Controller

- App

### ui(View)

- InputView
- OutputView

### domain(Model)

- BaseballGame
- NumberGenerator
- NumberComparator
