import React from 'react';
import Layout from '@theme/Layout';
import EbookGrid from '../components/EbookPageFeatures/EbookGrid';
import { Ebook } from '../types/Ebook';
import '../components/EbookPageFeatures/EbookGrid.module.css';

const sampleEbooks: Ebook[] = [
  {
    id: '1',
    title: 'Learn React',
    description: 'A comprehensive guide to learning React.js.',
    coverUrl: 'https://source.unsplash.com/800x600/?coding,react',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '2',
    title: 'Mastering TypeScript',
    description: 'Become a TypeScript expert with this in-depth guide.',
    coverUrl: 'https://source.unsplash.com/800x600/?coding,typescript',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '3',
    title: 'JavaScript Essentials',
    description: 'Everything you need to know about JavaScript.',
    coverUrl: 'https://source.unsplash.com/800x600/?coding,javascript',
    purchaseUrl: 'https://gumroad.com/',
    price: '$19.99',
  },
];

const EbooksPage: React.FC = () => {
  return (
    <Layout title="Ebooks" description="Browse our collection of ebooks">
      <div className="container margin-vert--lg">
        <h1 className="text--center">Ebooks</h1>
        <EbookGrid ebooks={sampleEbooks} />
      </div>
    </Layout>
  );
};

export default EbooksPage;