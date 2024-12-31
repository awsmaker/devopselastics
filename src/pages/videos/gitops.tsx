import React from 'react';
import Layout from '@theme/Layout';
import VideoGrid from '../../components/VideoPageFeatures/VideoGrid';
import { Video } from '../../types/Video';

const gitopsVideos: Video[] = [
  {
    id: '1',
    title: 'Introduction to GitOps',
    description: 'Learn the basics of GitOps.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  // Add 8 more videos with the same thumbnailUrl
  {
    id: '2',
    title: 'GitOps with Kubernetes',
    description: 'Understand how to implement GitOps with Kubernetes.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '3',
    title: 'GitOps Workflows',
    description: 'Learn different GitOps workflows.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '4',
    title: 'GitOps Security',
    description: 'Introduction to security in GitOps.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '5',
    title: 'GitOps Best Practices',
    description: 'Learn the best practices in GitOps.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$49.99',
  },
  {
    id: '6',
    title: 'Advanced GitOps',
    description: 'Deep dive into advanced GitOps topics.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '7',
    title: 'GitOps Performance Tuning',
    description: 'Learn how to tune GitOps performance.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '8',
    title: 'GitOps for CI/CD',
    description: 'Learn how to use GitOps in CI/CD pipelines.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '9',
    title: 'GitOps with ArgoCD',
    description: 'Learn how to implement GitOps with ArgoCD.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
];

const GitOpsVideosPage: React.FC = () => {
  return (
    <Layout title="GitOps Videos" description="Browse our collection of GitOps videos">
      <div className="container margin-vert--lg">
        <h1 className="text--center">GitOps Videos</h1>
        <VideoGrid videos={gitopsVideos} />
      </div>
    </Layout>
  );
};

export default GitOpsVideosPage;