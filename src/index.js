import deck from './index.mdx';
export { default as theme } from './theme';
import { registerLanguage } from 'react-syntax-highlighter/prism-light';
import typescript from 'react-syntax-highlighter/languages/prism/typescript';
import tsx from 'react-syntax-highlighter/languages/prism/tsx';

registerLanguage('typescript', typescript);
registerLanguage('tsx', tsx);

if (global.window) {
  const preloader = require('preloader');
  const loader = preloader({
    xhrImages: false,
  });

  loader.add(require('./images/brut-force.png'));
  loader.add(require('./images/binary-add.jpg'));
  loader.add(require('./images/full_adder.jpg'));
  loader.add(require('./images/result-bin.png'));
  loader.add(require('./images/result-deci.png'));
  loader.add(require('./images/result-eight.png'));

  loader.load();
}

export default [...deck];
