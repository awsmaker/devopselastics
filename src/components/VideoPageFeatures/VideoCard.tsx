import React from 'react';
import { Video } from '../../types/Video';
import styles from './VideoCard.module.css';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className={styles.videoCard}>
      <div className={styles.thumbnailContainer}>
        <img src={video.thumbnailUrl} alt={video.title} className={styles.thumbnail} />
        <div className={styles.overlay}>
          <span className={styles.playIcon}>▶</span>
        </div>
      </div>
      <h2 className={styles.title}>{video.title}</h2>
      <p className={styles.description}>{video.description}</p>
      <div className={styles.priceCta}>
        <span className={styles.price}>{video.price}</span>
        <a href={video.purchaseUrl} className={styles.ctaButton} target="_blank" rel="noopener noreferrer">Buy Now</a>
      </div>
    </div>
  );
};

export default VideoCard;