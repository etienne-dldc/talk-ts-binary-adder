import * as React from 'react';
import styled from 'styled-components';

const QuoteWrapper = styled.blockquote({
  fontSize: '1.3em',
  fontStyle: 'italic',
});

const Author = styled.p({
  textAlign: 'right',
  fontSize: '1em',
  fontStyle: 'normal',
  fontWeight: 100,
});

const Quote = ({ children, author, style }) => {
  return (
    <QuoteWrapper style={style}>
      {children}
      {author && <Author>{author}</Author>}
    </QuoteWrapper>
  );
};

export default Quote;
