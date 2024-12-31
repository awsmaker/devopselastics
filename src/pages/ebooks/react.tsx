import React from 'react';
import Layout from '@theme/Layout';
import EbookGrid from '../../components/EbookPageFeatures/EbookGrid';
import { Ebook } from '../../types/Ebook';

const reactEbooks: Ebook[] = [
  {
    id: '1',
    title: 'Learn React',
    description: 'A comprehensive guide to learning React.js.',
    coverUrl: 'https://via.placeholder.com/500x750',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '2',
    title: 'Advanced React Patterns',
    description: 'Master advanced patterns in React development.',
    coverUrl: 'https://via.placeholder.com/500x750',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '3',
    title: 'React and Redux',
    description: 'Learn how to manage state with Redux in React applications.',
    coverUrl: 'https://via.placeholder.com/500x750',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '4',
    title: 'React Hooks in Action',
    description: 'A deep dive into React Hooks and how to use them effectively.',
    coverUrl: 'https://via.placeholder.com/500x750',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '5',
    title: 'Fullstack React',
    description: 'Build fullstack applications with React and Node.js.',
    coverUrl: 'https://via.placeholder.com/500x750',
    purchaseUrl: 'https://gumroad.com/',
    price: '$49.99',
  },
  {
    id: '6',
    title: 'React Native in Action',
    description: 'Learn how to build mobile applications with React Native.',
    coverUrl: 'https://via.placeholder.com/500x750',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '7',
    title: 'Testing React Applications',
    description: 'A guide to testing React applications with Jest and Enzyme.',
    coverUrl: 'https://via.placeholder.com/500x750',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '8',
    title: 'React Performance Optimization',
    description: 'Techniques and best practices for optimizing React performance.',
    coverUrl: 'https://via.placeholder.com/500x750',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '9',
    title: 'React Design Patterns and Best Practices',
    description: 'Learn design patterns and best practices for building React applications.',
    coverUrl: 'https://via.placeholder.com/500x750',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
];

const ReactEbooksPage: React.FC = () => {
  return (
    <Layout title="React Ebooks" description="Browse our collection of React ebooks">
      <div className="container margin-vert--lg">
        <h1 className="text--center">React Ebooks</h1>
        <EbookGrid ebooks={reactEbooks} />
      </div>
    </Layout>
  );
};

export default ReactEbooksPage;