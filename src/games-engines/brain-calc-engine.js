import {
  initGame,
  getQuestion,
  getRandomNum,
} from '..';

export const generateSign = () => {
  const str = '-+*';
  return str.charAt(Math.floor(Math.random() * 3));
};

export const newGameQuestion = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const arithmetic = generateSign();
  return `${num1} ${arithmetic} ${num2}`;
};

export const parseQuesion = (pair) => {
  const question = getQuestion(pair);
  const data = question.split(' ');
  return data;
};

export const trueAnswer = (pair) => {
  const data = parseQuesion(pair);
  const first = Number(data[0]);
  const second = Number(data[2]);
  const arithmetic = data[1];
  switch (arithmetic) {
    case '-':
      return `${first - second}`;
    case '+':
      return `${first + second}`;
    case '*':
      return `${first * second}`;
    default:
      return false;
  }
};

export const initBrainCalc = () => (initGame(
  'What is the result of the expression?',
  3,
  trueAnswer,
  newGameQuestion,
));
