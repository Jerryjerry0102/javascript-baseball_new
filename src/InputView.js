const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  COMMAND: '숫자를 입력해주세요',
  LENGTH: 3,
  readUserNumbers(callback) {
    Console.readLine(InputView.COMMAND, answer => {
      const userNumbers = answer.split('').map(number => Number(number));
      InputView.validateUserNumbers(userNumbers);
      console.log(userNumbers); // 삭제
      callback(userNumbers);
    });
  },
  validateUserNumbers(userNumbers) {
    if (userNumbers.length !== InputView.LENGTH) throw new Error();
    if (!userNumbers.every(number => number > 0 && number < 10)) throw new Error();
    if (userNumbers.length !== new Set(userNumbers).size) throw new Error();
  },
};

module.exports = InputView;
