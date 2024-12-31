import React from 'react';
import Layout from '@theme/Layout';
import VideoGrid from '../../components/VideoPageFeatures/VideoGrid';
import { Video } from '../../types/Video';

const kubernetesVideos: Video[] = [
  {
    id: '1',
    title: 'Introduction to Kubernetes',
    description: 'Learn the basics of Kubernetes.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  // Add 8 more videos with the same thumbnailUrl
  {
    id: '2',
    title: 'Kubernetes Architecture',
    description: 'Understand the architecture of Kubernetes.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '3',
    title: 'Deploying Applications on Kubernetes',
    description: 'Learn how to deploy applications on Kubernetes.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '4',
    title: 'Kubernetes Networking',
    description: 'Introduction to networking in Kubernetes.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '5',
    title: 'Kubernetes Security',
    description: 'Learn about security in Kubernetes.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$49.99',
  },
  {
    id: '6',
    title: 'Kubernetes Monitoring and Logging',
    description: 'Introduction to monitoring and logging in Kubernetes.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '7',
    title: 'Advanced Kubernetes',
    description: 'Deep dive into advanced Kubernetes topics.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '8',
    title: 'Kubernetes Performance Tuning',
    description: 'Learn how to tune Kubernetes performance.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '9',
    title: 'Kubernetes Best Practices',
    description: 'Learn the best practices in Kubernetes.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
];

const KubernetesVideosPage: React.FC = () => {
  return (
    <Layout title="Kubernetes Videos" description="Browse our collection of Kubernetes videos">
      <div className="container margin-vert--lg">
        <h1 className="text--center">Kubernetes Videos</h1>
        <VideoGrid videos={kubernetesVideos} />
      </div>
    </Layout>
  );
};

export default KubernetesVideosPage;