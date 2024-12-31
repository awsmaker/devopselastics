import React from 'react';
import Layout from '@theme/Layout';
import VideoGrid from '../../components/VideoPageFeatures/VideoGrid';
import { Video } from '../../types/Video';

const videos: Video[] = [
  {
    id: '1',
    title: 'Learn React',
    description: 'A comprehensive guide to learning React.js.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '2',
    title: 'Advanced React Patterns',
    description: 'Master advanced patterns in React development.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '3',
    title: 'React and Redux',
    description: 'Learn how to manage state with Redux in React applications.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '4',
    title: 'React Hooks in Action',
    description: 'A deep dive into React Hooks and how to use them effectively.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '5',
    title: 'Fullstack React',
    description: 'Build fullstack applications with React and Node.js.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$49.99',
  },
  {
    id: '6',
    title: 'React Native in Action',
    description: 'Learn how to build mobile applications with React Native.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '7',
    title: 'Testing React Applications',
    description: 'A guide to testing React applications with Jest and Enzyme.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '8',
    title: 'React Performance Optimization',
    description: 'Techniques and best practices for optimizing React performance.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '9',
    title: 'React Design Patterns and Best Practices',
    description: 'Learn design patterns and best practices for building React applications.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
];

const VideosPage: React.FC = () => {
  return (
    <Layout title="Videos" description="Browse our collection of videos">
      <div className="container margin-vert--lg">
        <h1 className="text--center">Videos</h1>
        <VideoGrid videos={videos} />
      </div>
    </Layout>
  );
};

export default VideosPage;