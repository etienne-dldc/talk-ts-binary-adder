import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span({
  fontSize: '2em',
  verticalAlign: 'sub',
  display: 'inline-block',
  margin: '0 1rem',
  lineHeight: '1em',
});

const Arrow = ({ double = false, fat = false }) => <Wrapper>{fat ? '⇒' : double ? '⇔' : '↦'}</Wrapper>;

export default Arrow;
