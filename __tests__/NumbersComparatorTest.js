const NumbersComparator = require('../src/NumbersComparator');

describe('NumbersComparator 테스트', () => {
  test('3 strikeCount, 0 ballCount', () => {
    const numbersComparator = new NumbersComparator([1, 2, 3]);
    const { strikeCount, ballCount } = numbersComparator.compare([1, 2, 3]);
    expect(strikeCount).toBe(3);
    expect(ballCount).toBe(0);
  });

  test.each([[[4, 5, 6]], [[7, 8, 9]]])('0 strikeCount, 0 ballCount', input => {
    const numbersComparator = new NumbersComparator([1, 2, 3]);
    const { strikeCount, ballCount } = numbersComparator.compare(input);
    expect(strikeCount).toBe(0);
    expect(ballCount).toBe(0);
  });

  test.each([[[1, 4, 5]], [[4, 2, 5]], [[4, 5, 3]]])('1 strikeCount, 0 ballCount', input => {
    const numbersComparator = new NumbersComparator([1, 2, 3]);
    const { strikeCount, ballCount } = numbersComparator.compare(input);
    expect(strikeCount).toBe(1);
    expect(ballCount).toBe(0);
  });

  test.each([[[3, 1, 2]], [[2, 3, 1]]])('0 strikeCount, 3 ballCount', input => {
    const numbersComparator = new NumbersComparator([1, 2, 3]);
    const { strikeCount, ballCount } = numbersComparator.compare(input);
    expect(strikeCount).toBe(0);
    expect(ballCount).toBe(3);
  });

  test.each([[[1, 3, 4]], [[2, 4, 3]], [[4, 2, 1]]])('1 strikeCount, 1 ballCount', input => {
    const numbersComparator = new NumbersComparator([1, 2, 3]);
    const { strikeCount, ballCount } = numbersComparator.compare(input);
    expect(strikeCount).toBe(1);
    expect(ballCount).toBe(1);
  });
});
