import React from 'react';
import Layout from '@theme/Layout';
import EbookGrid from '../../components/EbookPageFeatures/EbookGrid';
import { Ebook } from '../../types/Ebook';

const javascriptEbooks: Ebook[] = [
  {
    id: '3',
    title: 'JavaScript Essentials',
    description: 'Everything you need to know about JavaScript.',
    coverUrl: 'https://source.unsplash.com/800x600/?coding,javascript',
    purchaseUrl: 'https://gumroad.com/',
    price: '$19.99',
  },
];

const JavaScriptEbooksPage: React.FC = () => {
  return (
    <Layout title="JavaScript Ebooks" description="Browse our collection of JavaScript ebooks">
      <div className="container margin-vert--lg">
        <h1 className="text--center">JavaScript Ebooks</h1>
        <EbookGrid ebooks={javascriptEbooks} />
      </div>
    </Layout>
  );
};

export default JavaScriptEbooksPage;