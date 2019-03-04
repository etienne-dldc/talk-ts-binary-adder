import * as React from 'react';
import styled from 'styled-components';

const Pipe = ({ style, step }) => {
  return (
    <svg style={style} width="80vw" viewBox="0 0 1394 350" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
        <g opacity={step > 0 ? 1 : 0}>
          <path
            d="M20,150 L0,150 L0,0 L350,0 L350,150 L330,150 L330,460 L20,460 L20,150 Z"
            fill="#010101"
            transform="rotate(-90 408.5 -58.5)"
          />
          <path
            d="M30,160 L320,160 L320,450 L30,450 L30,160 Z M10,10 L340,10 L340,140 L10,140 L10,10 Z"
            fill="#007BBB"
            transform="rotate(-90 408.5 -58.5)"
          />
          <g transform="rotate(-90 458.5 -168.5)" fill="#000">
            <rect fillOpacity="0.2" x="100" width="100" height="290" />
            <rect fillOpacity="0.2" x="70" width="20" height="290" />
            <rect fillOpacity="0.2" width="30" height="290" />
            <rect fillOpacity="0.1" x="200" width="40" height="290" />
          </g>
          <g transform="rotate(-90 413.5 -73.5)" fill="#000">
            <path d="M50,10 L50,120 L30,120 L30,10 L0,10 L0,0 L50,0 L50,10 Z" fillOpacity="0.2" />
            <rect fillOpacity="0.2" x="110" width="10" height="120" />
            <rect fillOpacity="0.2" x="140" width="120" height="120" />
            <rect fillOpacity="0.1" x="260" width="40" height="120" />
          </g>
        </g>
        <g opacity={step > 1 ? 1 : 0}>
          <rect stroke="#010101" strokeWidth="9" fill="#E57373" x="4.5" y="84.5" width="181" height="181" />
          <polygon fill="#FFF" transform="rotate(90 328.5 175.5)" points="328.5 144 410.5 207 246.5 207" />
        </g>
        <g opacity={step > 2 ? 1 : 0}>
          <polygon fill="#FFF" transform="rotate(90 1065.5 175.5)" points="1065.5 144 1147.5 207 983.5 207" />
          <circle stroke="#010101" strokeWidth="9" fill="#C5E573" cx="1299" cy="175" r="90.5" />
        </g>
      </g>
    </svg>
  );
};

export default Pipe;
