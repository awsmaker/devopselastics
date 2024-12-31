import React, { useEffect, useState } from 'react';
import styles from './VideoLibraryButton.module.css';

interface VideoLibraryButtonProps {
  url: string;
}

const VideoLibraryButton: React.FC<VideoLibraryButtonProps> = ({ url }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`${styles.container} ${isLoaded ? styles.loaded : ''}`}>
      <a
        href={url}
        className={styles.button}
        aria-label="Découvrez notre bibliothèque de vidéos"
      >
        <span className={styles.text}>
          Découvrez notre bibliothèque de <span className={styles.highlight}>vidéos</span>
        </span>
      </a>
    </div>
  );
};

export default VideoLibraryButton;