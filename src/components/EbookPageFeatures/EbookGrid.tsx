import React from 'react';
import EbookCard from './EbookCard';
import { Ebook } from '../../types/Ebook';
import styles from './EbookGrid.module.css';

interface EbookGridProps {
  ebooks: Ebook[];
}

const EbookGrid: React.FC<EbookGridProps> = ({ ebooks }) => {
  return (
    <div className={styles.ebookGrid}>
      {ebooks.map((ebook) => (
        <EbookCard key={ebook.id} ebook={ebook} />
      ))}
    </div>
  );
};

export default EbookGrid;