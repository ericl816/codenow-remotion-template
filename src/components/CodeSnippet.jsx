import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import Prism from 'prismjs';

export const CodeSnippet = () => {
  const frame = useCurrentFrame();
  const code = `function animate() {
  const element = document.querySelector('.animation');
  element.style.transform = 'scale(1.5)';
  element.style.transition = 'all 0.5s ease';
}`;

  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const y = interpolate(frame, [0, 20], [20, 0]);

  const highlightedCode = Prism.highlight(
    code,
    Prism.languages.javascript,
    'javascript'
  );

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        padding: '2rem',
        background: '#1a1a1a',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <pre>
        <code
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    </div>
  );
};
