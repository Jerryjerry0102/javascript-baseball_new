const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  COMMAND: '숫자를 입력해주세요',
  LENGTH: 3,
  RETRY: 1,
  END: 2,
  RETRY_COMMAND: `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`,
  readUserNumbers(callback) {
    Console.readLine(this.COMMAND, answer => {
      const userNumbers = answer.split('').map(number => Number(number));
      this.validateUserNumbers(userNumbers);
      console.log(userNumbers); // 삭제
      callback(userNumbers);
    });
  },
  validateUserNumbers(userNumbers) {
    if (userNumbers.length !== this.LENGTH) throw new Error();
    if (!userNumbers.every(number => number > 0 && number < 10)) throw new Error();
    if (userNumbers.length !== new Set(userNumbers).size) throw new Error();
  },

  readRetry(callback) {
    Console.readLine(this.RETRY_COMMAND, answer => {
      this.validateRetry(Number(answer));
      callback(Number(answer));
    });
  },
  validateRetry(answer) {
    if (!(answer === this.RETRY || answer === this.END)) throw new Error();
  },
};

module.exports = InputView;
