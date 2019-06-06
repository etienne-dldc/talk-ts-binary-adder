const images = {
  brutForce: require('./images/01-brut-force.png'),
  binaryAdd: require('./images/02-binary-add.jpg'),
  fullAdder: require('./images/03-full_adder.jpg'),
  resultBin: require('./images/04-result-bin.png'),
  resultDeci: require('./images/05-result-deci.png'),
  resultEight: require('./images/06-result-eight.png'),
  deepError: require('./images/07-deep-error.png'),
  resultTen: require('./images/08-result-ten.png'),
  resultEleven: require('./images/09-result-eleven.png'),
  resultDeci: require('./images/10-result-deci.png'),
  longDeciResult: require('./images/11-long-deci-result.png'),
};

if (global.window) {
  const preloader = require('preloader');
  const loader = preloader({
    xhrImages: false,
  });

  Object.keys(images).forEach(key => {
    loader.add(images[key]);
  });

  loader.load();
}

export default images;
