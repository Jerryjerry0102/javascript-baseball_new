class NumbersComparator {
  #computerNumbers;

  constructor(computerNumbers) {
    this.#computerNumbers = computerNumbers;
  }

  compare(userNumbers) {
    let strikeCount = 0;
    let ballCount = 0;
    userNumbers.forEach((userNumber, index) => {
      if (this.#computerNumbers[index] === userNumber) strikeCount++;
      else if (this.#computerNumbers.includes(userNumber)) ballCount++;
    });
    return { strikeCount, ballCount };
  }
}

module.exports = NumbersComparator;
