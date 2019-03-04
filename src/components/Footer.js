import React from 'react';
import styled from 'styled-components';
import Dots from './Dots';
import Flex from './Flex';
import { space, color, flexDirection, justifyContent } from 'styled-system';
import DeckCtx, { MODES } from '../utils/DeckCtx';

const Bottom = styled.div(
  {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    '@media print': {
      display: 'none',
    },
  },
  space
);

const Side = styled.div(
  {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  flexDirection,
  justifyContent
);

const Link = styled.a(
  {
    opacity: 0.5,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  color,
  space
);

const Footer = () => {
  const deckState = React.useContext(DeckCtx);

  if (deckState.mode !== MODES.normal) {
    return null;
  }

  return (
    <Bottom>
      <Flex alignItems="center" p={2} pl={3} pr={3}>
        <Side>
          <Link mr={2} color="text" href="https://overmind-talk.etienne.tech">
            overmind-talk.etienne.tech
          </Link>
          <Link mr={2} color="text" href="https://github.com/etienne-dldc/overmind-introduction">
            (source)
          </Link>
        </Side>
        <Dots
          mx="auto"
          mb={1}
          index={deckState.index}
          length={deckState.length}
          onClick={index => deckState.update({ index })}
        />
        <Side justifyContent="flex-end">
          <Link mr={2} color="text" href="https://overmind-talk.etienne.tech/presentation.pdf">
            Download as PDF
          </Link>
        </Side>
      </Flex>
    </Bottom>
  );
};

export default Footer;
