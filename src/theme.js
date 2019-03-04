import Provider from './components/Provider';
import base from 'mdx-deck/themes';

const blue = '#0af';

export default {
  ...base,
  font: '"Avenir Next", system-ui, sans-serif',
  colors: {
    text: '#fff',
    background: '#133046',
    blue,
    link: blue,
    pre: blue,
    preBackground: '#000',
    code: blue,
  },
  heading: {
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: 600,
  },
  quote: {
    fontWeight: 600,
  },
  Provider,
};
