import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ percentage }) => {
  return (
    <div style={{ width: '100px', margin: 'auto' }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={10}
        styles={{
          root: {},
          path: {
            stroke: `#2A721E`,
            strokeLinecap: 'butt',
            transition: 'stroke-dashoffset 0.5s ease 0s',
          },
          text: {
            fill: '#2A721E',
            fontSize: '16px',
          },
          trail: {
            stroke: '#D9D9D1',
          },


        }}
      />
    </div>
  );
};

export default CircularProgressBar;
