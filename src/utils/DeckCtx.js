import { createContext } from 'react';

// index: (number) the current slide index
// length: (number) the length of the slides array
// mode: (string) the current mode (one of 'NORMAL', 'PRESENTER', or 'OVERVIEW')
// notes: (object) custom speaker notes for all slides
// step: (number) the current visible step in an Appear component

export const MODES = {
  normal: 'NORMAL',
  presenter: 'PRESENTER',
  overview: 'OVERVIEW',
  grid: 'GRID',
};

const DeckCtx = createContext();

export default DeckCtx;
