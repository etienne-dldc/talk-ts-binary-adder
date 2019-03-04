import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div({
  position: 'absolute',
  transform: 'translateY(-100%)',
  height: '100%',
  width: '100%',
});

const Card = styled.div({
  textTransform: 'uppercase',
  position: 'absolute',
  textAlign: 'center',
  left: '50%',
  top: '50%',
  height: '15vh',
  width: '45vh',
  transform: 'translate(-50%, -50%) rotate(-20deg)',
  background: '#D32F2F',
  color: 'white',
  fontWeight: 900,
  fontSize: '11vh',
});

const Soon = ({ style }) => (
  <Wrapper style={style}>
    <Card>SOON</Card>
  </Wrapper>
);

export default Soon;
