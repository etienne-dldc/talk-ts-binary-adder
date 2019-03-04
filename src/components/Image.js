import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div(p => ({
  width: '80vw',
  height: p.height || '80vh',
}));

const Img = styled.img({
  height: '100%',
});

const Image = ({ style, height, ...props }) => (
  <Wrapper style={style} height={height}>
    <Img {...props} />
  </Wrapper>
);

export default Image;
