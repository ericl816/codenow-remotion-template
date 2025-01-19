import { Composition, registerRoot } from 'remotion';
import { Video } from './Video';

export const RemotionVideo = () => {
  return (
    <Composition
      id="Video"
      component={Video}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

registerRoot(RemotionVideo);
