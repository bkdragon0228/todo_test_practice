import { rest } from 'msw';

const advices = [
  'Happiness is everywhere and nowhere',
  'love is gone',
  'time is money',
  'love yourself',
  'be positive',
  `don't be afraid`,
  `This too shall pass`,
  'The die is cast',
  'Life is unfair, get used to it',
  'The more ignorant, the more creative.',
];

const getAdvice = () => {
  return rest.get('https://api.adviceslip.com/advice', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: Math.ceil(Math.random() * 10 - 1),
        advice: advices[Math.ceil(Math.random() * 10 - 1)],
      })
    );
  });
};

const adviceHandlers = [getAdvice()];

export default adviceHandlers;
