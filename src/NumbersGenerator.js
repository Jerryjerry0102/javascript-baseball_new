const { Random } = require('@woowacourse/mission-utils');

const NumbersGenerator = {
  START_INCLUSIVE: 1,
  END_INCLUSIVE: 9,
  COUNT: 3,
  generate() {
    return Random.pickUniqueNumbersInRange(
      NumbersGenerator.START_INCLUSIVE,
      NumbersGenerator.END_INCLUSIVE,
      NumbersGenerator.COUNT
    );
  },
};

module.exports = NumbersGenerator;
