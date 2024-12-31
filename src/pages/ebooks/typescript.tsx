import React from 'react';
import Layout from '@theme/Layout';
import EbookGrid from '../../components/EbookPageFeatures/EbookGrid';
import { Ebook } from '../../types/Ebook';

const typescriptEbooks: Ebook[] = [
  {
    id: '2',
    title: 'Mastering TypeScript',
    description: 'Become a TypeScript expert with this in-depth guide.',
    coverUrl: 'https://source.unsplash.com/800x600/?coding,typescript',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
];

const TypeScriptEbooksPage: React.FC = () => {
  return (
    <Layout title="TypeScript Ebooks" description="Browse our collection of TypeScript ebooks">
      <div className="container margin-vert--lg">
        <h1 className="text--center">TypeScript Ebooks</h1>
        <EbookGrid ebooks={typescriptEbooks} />
      </div>
    </Layout>
  );
};

export default TypeScriptEbooksPage;