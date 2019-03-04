import deck from './index.mdx';
export { default as theme } from './theme';

if (global.window) {
  const preloader = require('preloader');
  const loader = preloader({
    xhrImages: false,
  });

  // loader.add(imgDevtool3);

  loader.load();
}

export default [...deck];
