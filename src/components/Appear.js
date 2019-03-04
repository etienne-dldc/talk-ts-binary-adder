import React from 'react';
import { withDeck, updaters, constants } from 'mdx-deck';
import DeckCtx from '../utils/DeckCtx';

class Appear extends React.Component {
  constructor(props) {
    super(props);
    const { update, index } = props.deck;
    const steps = React.Children.toArray(props.children).length;
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

          const showItem = index => {
            if (deckState.isPrint) {
              return true;
            }
            if (deckState.mode === constants.modes.grid) {
              return true;
            }
            if (deckState.mode === constants.modes.presenter && deckState.index !== slideIndex) {
              return true;
            }
            if (deckState.index < slideIndex) {
              return false;
            }
            if (deckState.index > slideIndex) {
              return true;
            }
            return step >= index + 1;
          };

          return (
            <React.Fragment>
              {children.map((child, i) => {
                return React.cloneElement(child, {
                  key: i,
                  style: {
                    visibility: showItem(i) ? 'visible' : 'hidden',
                    ...(child.props.style || {}),
                  },
                });
              })}
            </React.Fragment>
          );
        }}
      </DeckCtx.Consumer>
    );
  }
}

export default withDeck(Appear);
