import React from 'react';
import { Ebook } from '../../types/Ebook';
import styles from './EbookCard.module.css';

interface EbookCardProps {
  ebook: Ebook;
}

const EbookCard: React.FC<EbookCardProps> = ({ ebook }) => {
  return (
    <div className={styles.ebookCard}>
      <div className={styles.imageContainer}>
        <img src={ebook.coverUrl} alt={ebook.title} className={styles.coverImage} />
      </div>
      <h2 className={styles.title}>{ebook.title}</h2>
      <p className={styles.description}>{ebook.description}</p>
      <div className={styles.priceCta}>
        <span className={styles.price}>{ebook.price}</span>
        <a href={ebook.purchaseUrl} className={styles.ctaButton} target="_blank" rel="noopener noreferrer">Buy Now</a>
      </div>
    </div>
  );
};

export default EbookCard;