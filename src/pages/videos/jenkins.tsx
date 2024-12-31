import React from 'react';
import Layout from '@theme/Layout';
import VideoGrid from '../../components/VideoPageFeatures/VideoGrid';
import { Video } from '../../types/Video';

const jenkinsVideos: Video[] = [
  {
    id: '1',
    title: 'Introduction to Jenkins',
    description: 'Learn the basics of Jenkins.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  // Add 8 more videos with the same thumbnailUrl
  {
    id: '2',
    title: 'Jenkins Pipelines',
    description: 'Understand Jenkins pipelines and how to use them.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '3',
    title: 'Deploying Applications with Jenkins',
    description: 'Learn how to deploy applications with Jenkins.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '4',
    title: 'Jenkins Security',
    description: 'Introduction to security in Jenkins.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '5',
    title: 'Jenkins Best Practices',
    description: 'Learn the best practices in Jenkins.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$49.99',
  },
  {
    id: '6',
    title: 'Advanced Jenkins',
    description: 'Deep dive into advanced Jenkins topics.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '7',
    title: 'Jenkins Performance Tuning',
    description: 'Learn how to tune Jenkins performance.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '8',
    title: 'Jenkins for CI/CD',
    description: 'Learn how to use Jenkins in CI/CD pipelines.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '9',
    title: 'Jenkins with Docker',
    description: 'Learn how to use Jenkins with Docker.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
];

const JenkinsVideosPage: React.FC = () => {
  return (
    <Layout title="Jenkins Videos" description="Browse our collection of Jenkins videos">
      <div className="container margin-vert--lg">
        <h1 className="text--center">Jenkins Videos</h1>
        <VideoGrid videos={jenkinsVideos} />
      </div>
    </Layout>
  );
};

export default JenkinsVideosPage;