const InputView = require('../src/InputView');

describe('InputView 테스트', () => {
  test.each([[[1, 2, 3, 4]], [[0, 1, 2]], [[1, 1, 2]], [[1, 2, 10]]])(
    '서로 다른 3자리의 수가 아닌 경우 예외 처리',
    input => {
      expect(() => {
        InputView.validateUserNumbers(input);
      }).toThrow();
    }
  );
});
