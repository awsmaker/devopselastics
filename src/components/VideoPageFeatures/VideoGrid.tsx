import React from 'react';
import VideoCard from './VideoCard';
import { Video } from '../../types/Video';
import styles from './VideoGrid.module.css';

interface VideoGridProps {
  videos: Video[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div className={styles.videoGrid}>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;