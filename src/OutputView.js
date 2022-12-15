const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  START_MESSAGE: '숫자 야구 게임을 시작합니다.',
  printStartMessage() {
    Console.print(OutputView.START_MESSAGE);
  },

  printResult(strikeCount, ballCount) {
    if (strikeCount === 3) {
      Console.print('3스트라이크');
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    } else if (strikeCount === 0 && ballCount === 0) Console.print('낫싱');
    else if (strikeCount === 0) Console.print(`${ballCount}볼`);
    else if (ballCount === 0) Console.print(`${strikeCount}스트라이크`);
    else Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
  },
};

module.exports = OutputView;
