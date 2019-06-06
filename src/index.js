import deck from './index.mdx';
export { theme } from './theme';
import { registerLanguage } from 'react-syntax-highlighter/prism-light';
import typescript from 'react-syntax-highlighter/languages/prism/typescript';
import tsx from 'react-syntax-highlighter/languages/prism/tsx';

registerLanguage('typescript', typescript);
registerLanguage('tsx', tsx);

export default [...deck];
