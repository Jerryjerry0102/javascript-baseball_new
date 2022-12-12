const OutputView = require('./OutputView');

class App {
  play() {
    App.startBaseballGame();
  }

  static startBaseballGame() {
    OutputView.printStartMessage();
  }
}

const app = new App();
app.play();

module.exports = App;
