/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  let factor_0 = 0;
  let factor_1 = 0;
  let palindromeNumber = 0;
  findLargestPalindrome();

  function findLargestPalindrome() {
    const startingFactor = Math.pow(10, digits) - 1;
    const endingFactor = Math.floor(startingFactor / 10);
    let currentNum = startingFactor * startingFactor;

    while(currentNum > 0) {
      if (isPalindrome(currentNum)) {
        factor_0 = startingFactor;
        factor_1 = startingFactor;
        for (; factor_0 > endingFactor; factor_0 --) {
          factor_1 = startingFactor;
          for (; factor_1 > endingFactor; factor_1 --) {
            if (factor_0 * factor_1 === currentNum) {
              palindromeNumber = currentNum;
              return;
            }
            if (factor_0 * factor_1 < currentNum) {
              break;
            }
          }
        }
      }
      currentNum --;
    }
  }

  function isPalindrome(num) {
    const numString = num.toString();
    let res = '';
    for (let i = numString.length - 1; i >= 0; i --) {
      res += numString.charAt(i);
    }
    return numString === res;
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};