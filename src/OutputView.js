const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  START_MESSAGE: '숫자 야구 게임을 시작합니다.',
  printStartMessage() {
    Console.print(OutputView.START_MESSAGE);
  },
};

module.exports = OutputView;
