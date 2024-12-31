import React from 'react';
import Layout from '@theme/Layout';
import VideoGrid from '../../components/VideoPageFeatures/VideoGrid';
import { Video } from '../../types/Video';

const devopsVideos: Video[] = [
  {
    id: '1',
    title: 'Introduction to DevOps',
    description: 'Learn the basics of DevOps.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  // Add 8 more videos with the same thumbnailUrl
  {
    id: '2',
    title: 'DevOps Tools',
    description: 'Overview of popular DevOps tools.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '3',
    title: 'CI/CD with Jenkins',
    description: 'Learn how to set up CI/CD pipelines with Jenkins.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '4',
    title: 'Infrastructure as Code',
    description: 'Introduction to Infrastructure as Code.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '5',
    title: 'Monitoring and Logging',
    description: 'Learn about monitoring and logging in DevOps.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$49.99',
  },
  {
    id: '6',
    title: 'Containerization with Docker',
    description: 'Introduction to containerization with Docker.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '7',
    title: 'Kubernetes for Beginners',
    description: 'Learn the basics of Kubernetes.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '8',
    title: 'Advanced Kubernetes',
    description: 'Deep dive into Kubernetes.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '9',
    title: 'DevOps Best Practices',
    description: 'Learn the best practices in DevOps.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
];

const DevOpsVideosPage: React.FC = () => {
  return (
    <Layout title="DevOps Videos" description="Browse our collection of DevOps videos">
      <div className="container margin-vert--lg">
        <h1 className="text--center">DevOps Videos</h1>
        <VideoGrid videos={devopsVideos} />
      </div>
    </Layout>
  );
};

export default DevOpsVideosPage;