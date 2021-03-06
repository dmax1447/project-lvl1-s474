import { getRandomInRange } from '../utils';
import playGame from '../engine';

const gameTaskDescription = 'Find the greatest common divisor of given numbers.';

function findDivisors(num) {
  const divisors = [];
  for (let i = num; i > 0; i -= 1) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

function findGreatCommonDivisor(numA, numB) {
  const divisorsA = findDivisors(numA);
  const divisorsB = findDivisors(numB);
  let commonDivisors;

  if (divisorsA.length >= divisorsB.length) {
    commonDivisors = divisorsA.filter(element => (divisorsB.indexOf(element) !== -1));
  } else {
    commonDivisors = divisorsB.filter(element => (divisorsA.indexOf(element) !== -1));
  }
  return commonDivisors[0];
}

function generateQuizGcd() {
  const roundData = {};
  const numA = getRandomInRange(1, 30);
  const numB = getRandomInRange(1, 30);
  roundData.question = `${numA} ${numB}`;
  roundData.answer = `${findGreatCommonDivisor(numA, numB)}`;
  return roundData;
}

function launchGameGcd() {
  playGame(generateQuizGcd, gameTaskDescription);
}

export default launchGameGcd;
