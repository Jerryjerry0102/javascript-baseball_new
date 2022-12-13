const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  COMMAND: '숫자를 입력해주세요',
  LENGTH: 3,
  readUserNumbers() {
    Console.readLine(InputView.COMMAND, answer => {
      const userNumbers = Array.from(answer);
      InputView.validateUserNumbers(userNumbers);
      Console.print(userNumbers);
    });
  },
  validateUserNumbers(userNumbers) {
    if (userNumbers.length !== InputView.LENGTH) throw new Error();
    if (!userNumbers.every(number => number > 0 && number < 10)) throw new Error();
    if (userNumbers.length !== new Set(userNumbers).size) throw new Error();
  },
};

InputView.readUserNumbers();

module.exports = InputView;
