import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Background3D from '../../components/Background3D';
import styles from './index.module.css';

const categories = [
  { id: 'devops', name: 'Introduction to DevOps' },
  { id: 'linux', name: 'Linux' },
  { id: 'git', name: 'Git' },
  { id: 'jenkins', name: 'Jenkins' },
  { id: 'ansible', name: 'Ansible' },
  { id: 'docker', name: 'Docker' },
  { id: 'kubernetes', name: 'Kubernetes' },
  { id: 'helm', name: 'Helm' },
  { id: 'terraform', name: 'Terraform' },
  { id: 'gitops', name: 'GitOps' },
];

const VideosPage: React.FC = () => {
  return (
    <Layout title="Videos" description="Browse our collection of video categories">
      <Background3D />
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Explore Our Video Categories</h1>
        <p className={styles.heroSubtitle}>Discover a wide range of topics and enhance your skills with our curated video content.</p>
      </div>
      <div className="container margin-vert--lg">
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <Link key={category.id} to={`/videos/${category.id}`} className={styles.categoryCard}>
              <div className={styles.cardContent}>
                <h2>{category.name}</h2>
                <p>Explore videos on {category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default VideosPage;