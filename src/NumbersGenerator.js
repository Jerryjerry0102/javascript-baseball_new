const { Random } = require('@woowacourse/mission-utils');

const NumbersGenerator = {
  START_INCLUSIVE: 1,
  END_INCLUSIVE: 9,
  COUNT: 3,
  generate() {
    const computerNumbers = [];
    while (computerNumbers.length < this.COUNT) {
      const number = Random.pickNumberInRange(this.START_INCLUSIVE, this.END_INCLUSIVE);
      if (!computerNumbers.includes(number)) {
        computerNumbers.push(number);
      }
    }
    return computerNumbers;
  },
};

module.exports = NumbersGenerator;
