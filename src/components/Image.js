import * as React from 'react';
import styled from 'styled-components';

const Img = styled.img({
  objectFit: 'contain',
});

const Image = ({ style, height, ...props }) => <Img {...props} />;

export default Image;
