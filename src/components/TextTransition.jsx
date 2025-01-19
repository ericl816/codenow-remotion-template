import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

export const TextTransition = () => {
  const frame = useCurrentFrame();
  const words = ['Modern', 'Dynamic', 'Creative'];

  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const scale = interpolate(frame, [0, 20], [0.8, 1]);

  const currentWord = words[Math.floor(frame / 30) % words.length];

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        fontSize: '4rem',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'system-ui',
      }}
    >
      {currentWord}
    </div>
  );
};
