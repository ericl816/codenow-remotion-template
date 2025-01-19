import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const Logo = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const scale = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const rotation = interpolate(frame, [0, 30], [0, 360]);

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `scale(${scale}) rotate(${rotation}deg)`,
      }}
    >
      <svg width="200" height="200" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="#61dafb" />
        <path
          d="M50 25L75 75H25L50 25Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
