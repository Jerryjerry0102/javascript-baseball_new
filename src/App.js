const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const NumbersGenerator = require('./NumbersGenerator');
const NumbersComparator = require('./NumbersComparator');

class App {
  #RETRY;

  constructor() {
    this.#RETRY = 1;
  }

  play() {
    OutputView.printStartMessage();
    this.startBaseballGame();
  }

  startBaseballGame() {
    const computerNumbers = NumbersGenerator.generate();
    console.log(computerNumbers); // 삭제
    this.numbersComparator = new NumbersComparator(computerNumbers);
    this.controlUserNumbers();
  }

  controlUserNumbers() {
    InputView.readUserNumbers(userNumbers => {
      this.controlBaseballGame(userNumbers);
    });
  }

  controlBaseballGame(userNumbers) {
    const { strikeCount, ballCount } = this.numbersComparator.compare(userNumbers);
    OutputView.printResult(strikeCount, ballCount);
    if (strikeCount !== 3) this.controlUserNumbers();
    else this.controlRetry();
  }

  controlRetry() {
    InputView.readRetry(answer => {
      if (answer === this.#RETRY) this.startBaseballGame();
      Console.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
