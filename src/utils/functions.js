/**
 * We take the credit card number, convert it to a string, split it into an array of digits, map each
 * digit to a number, map each digit to a number multiplied by 2 if it's in an even position, fix the
 * double digits, add all the digits together, and check if the sum is divisible by 2
 * @param number - The credit card number to validate.
 * @returns A boolean value.
 */
export const creditCardValidate = (number) => {
  const digits = number.toString().split('').map(Number);

  const sum = digits.map((digit, index) => index % 2 === digits.length % 2 ? fixDouble(digit * 2) : digit).reduce((acc, digit) => acc += digit, 0);

  return sum % 2 === 0;
}
/**
 * If the number is greater than 9, subtract 9 from it, otherwise return the number.
 * @param number - The number to be fixed.
 * @returns the number if it is greater than 9, otherwise it is returning the number minus 9.
 */
const fixDouble = (number) => {
  return number > 9 ? number - 9 : number;
}