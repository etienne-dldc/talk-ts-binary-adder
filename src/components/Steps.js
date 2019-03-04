import React from 'react';
import { withDeck, updaters, constants } from 'mdx-deck';
import DeckCtx from '../utils/DeckCtx';

class Steps extends React.Component {
  constructor(props) {
    super(props);
    const { update, index } = props.deck;
    const steps = React.Children.toArray(props.children).length - 1;
    update(updaters.setSteps(index, steps));
  }

  render() {
    return (
      <DeckCtx.Consumer>
        {deckState => {
          const children = React.Children.toArray(this.props.children).map(
            child => (typeof child === 'string' ? <div>{child}</div> : child)
          );
          const { step, mode, index: slideIndex } = this.props.deck;
          const steps = children.length - 1;

          const showItem = index => {
            if (deckState.isPrint) {
              return index === steps;
            }
            if (deckState.mode === constants.modes.grid) {
              return index === steps;
            }
            if (deckState.mode === constants.modes.presenter && deckState.index !== slideIndex) {
              return index === steps;
            }
            if (deckState.index < slideIndex) {
              return index === 0;
            }
            if (deckState.index > slideIndex) {
              return index === steps;
            }
            return step === index;
          };

          return <React.Fragment>{children.filter((child, i) => showItem(i))}</React.Fragment>;
        }}
      </DeckCtx.Consumer>
    );
  }
}

export default withDeck(Steps);
