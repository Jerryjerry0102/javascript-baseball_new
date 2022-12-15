const OutputView = require('./OutputView');
const InputView = require('./InputView');
const NumbersGenerator = require('./NumbersGenerator');
const NumbersComparator = require('./NumbersComparator');

class App {
  constructor() {
    this.numbersComparator;
  }

  play() {
    this.startBaseballGame();
  }

  startBaseballGame() {
    OutputView.printStartMessage();
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
    console.log('count', strikeCount, ballCount); // 삭제
    if (strikeCount !== 3) this.controlUserNumbers();
  }
}

const app = new App();
app.play();

module.exports = App;
