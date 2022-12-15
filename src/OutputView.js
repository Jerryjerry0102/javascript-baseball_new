const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  START_MESSAGE: '숫자 야구 게임을 시작합니다.',
  END_MESSAGE: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  STRIKE: '스트라이크',
  BALL: '볼',
  NOTHING: '낫싱',
  printStartMessage() {
    Console.print(OutputView.START_MESSAGE);
  },

  printResult(strikeCount, ballCount) {
    if (strikeCount === 3) {
      Console.print(strikeCount + OutputView.STRIKE);
      Console.print(OutputView.END_MESSAGE);
    } else if (strikeCount === 0 && ballCount === 0) Console.print(OutputView.NOTHING);
    else if (strikeCount === 0) Console.print(ballCount + OutputView.BALL);
    else if (ballCount === 0) Console.print(strikeCount + OutputView.STRIKE);
    else Console.print(ballCount + OutputView.BALL + ' ' + strikeCount + OutputView.STRIKE);
  },
};

module.exports = OutputView;
