import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Category } from '../../types/Ebook';
import styles from './index.module.css';

const categories: Category[] = [
  { id: 'react', name: 'React', ebooks: [] },
  { id: 'typescript', name: 'TypeScript', ebooks: [] },
  { id: 'javascript', name: 'JavaScript', ebooks: [] },
  { id: 'ansible', name: 'Ansible', ebooks: [] }, // Ensure Ansible category is included
];

const EbooksPage: React.FC = () => {
  return (
    <Layout title="Ebooks" description="Browse our collection of ebooks by category">
      <div className="container margin-vert--lg">
        <h1 className="text--center">Ebooks</h1>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <Link key={category.id} to={`/ebooks/${category.id}`} className={styles.categoryCard}>
              <h2>{category.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default EbooksPage;