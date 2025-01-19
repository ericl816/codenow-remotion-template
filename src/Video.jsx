import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from 'remotion';
import { Logo } from './components/Logo';
import { CodeSnippet } from './components/CodeSnippet';
import { TextTransition } from './components/TextTransition';
import './styles.css';

export const Video = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill className="bg-gradient">
      <Sequence from={0} durationInFrames={90}>
        <Logo />
      </Sequence>
      
      <Sequence from={60} durationInFrames={90}>
        <CodeSnippet />
      </Sequence>
      
      <Sequence from={120} durationInFrames={90}>
        <TextTransition />
      </Sequence>
    </AbsoluteFill>
  );
};
