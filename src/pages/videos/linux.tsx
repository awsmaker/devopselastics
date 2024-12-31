import React from 'react';
import Layout from '@theme/Layout';
import VideoGrid from '../../components/VideoPageFeatures/VideoGrid';
import { Video } from '../../types/Video';

const linuxVideos: Video[] = [
  {
    id: '1',
    title: 'Introduction to Linux',
    description: 'Learn the basics of Linux.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  // Add 8 more videos with the same thumbnailUrl
  {
    id: '2',
    title: 'Linux Command Line',
    description: 'Master the Linux command line.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '3',
    title: 'Linux System Administration',
    description: 'Learn how to administer Linux systems.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '4',
    title: 'Linux Networking',
    description: 'Introduction to networking in Linux.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '5',
    title: 'Linux Security',
    description: 'Learn about security in Linux.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$49.99',
  },
  {
    id: '6',
    title: 'Linux Shell Scripting',
    description: 'Introduction to shell scripting in Linux.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '7',
    title: 'Advanced Linux',
    description: 'Deep dive into advanced Linux topics.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '8',
    title: 'Linux Performance Tuning',
    description: 'Learn how to tune Linux performance.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '9',
    title: 'Linux Best Practices',
    description: 'Learn the best practices in Linux.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
];

const LinuxVideosPage: React.FC = () => {
  return (
    <Layout title="Linux Videos" description="Browse our collection of Linux videos">
      <div className="container margin-vert--lg">
        <h1 className="text--center">Linux Videos</h1>
        <VideoGrid videos={linuxVideos} />
      </div>
    </Layout>
  );
};

export default LinuxVideosPage;