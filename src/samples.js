import brutForce from '!raw-loader!./code-samples/01-brut-force.ts';
import logicGates from '!raw-loader!./code-samples/02-logic-gates.ts';
import sumCarry from '!raw-loader!./code-samples/03-sum-carry.ts';
import binaryAdder from '!raw-loader!./code-samples/04-binary-adder.ts';
import toBin from '!raw-loader!./code-samples/05-to-bin.ts';
import borring from '!raw-loader!./code-samples/06-borring.ts';
import toDeci from '!raw-loader!./code-samples/07-to-deci.ts';
import final from '!raw-loader!./code-samples/08-final.ts';
import fullFour from '!raw-loader!./code-samples/09-full-four.ts';
import fullEight from '!raw-loader!./code-samples/10-full-eight.ts';
import recursive from '!raw-loader!./code-samples/11-recursive.ts';
import fullTen from '!raw-loader!./code-samples/12-full-ten.ts';
import fullEleven from '!raw-loader!./code-samples/13-full-eleven.ts';
import fullDeci from '!raw-loader!./code-samples/14-full-deci.ts';
import fullDeciLong from '!raw-loader!./code-samples/15-full-deci-long.ts';

const samples = {
  brutForce,
  logicGates,
  sumCarry,
  binaryAdder,
  toBin,
  borring,
  toDeci,
  final,
  fullFour,
  fullEight,
  recursive,
  fullTen,
  fullEleven,
  fullDeci,
  fullDeciLong,
};

const START_TOKEN = 'SLIDE_CONTENT_START';
const END_TOKEN = 'SLIDE_CONTENT_END';

Object.keys(samples).forEach(key => {
  const code = samples[key];
  const lines = code.split('\n');
  if (lines[lines.length - 1] === '') {
    lines.pop();
  }
  const startLine = lines.find(line => line.indexOf(START_TOKEN) >= 0);
  const startLineIndex = lines.indexOf(startLine);
  const endLine = lines.find(line => line.indexOf(END_TOKEN) >= 0);
  const andLineIndex = lines.indexOf(endLine);

  if (startLineIndex >= 0) {
    samples[key] = lines.slice(startLineIndex + 1, andLineIndex >= 0 ? andLineIndex : lines.length).join('\n');
  }
});

export default samples;
