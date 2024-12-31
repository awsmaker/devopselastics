import React from 'react';
import Layout from '@theme/Layout';
import EbookGrid from '../../components/EbookPageFeatures/EbookGrid';
import { Ebook } from '../../types/Ebook';

const ansibleEbooks: Ebook[] = [
  {
    id: '4',
    title: 'Ansible for DevOps',
    description: 'A comprehensive guide to using Ansible for DevOps.',
    coverUrl: 'https://source.unsplash.com/800x600/?coding,ansible',
    purchaseUrl: 'https://gumroad.com/',
    price: '$24.99',
  },
];

const AnsibleEbooksPage: React.FC = () => {
  return (
    <Layout title="Ansible Ebooks" description="Browse our collection of Ansible ebooks">
      <div className="container margin-vert--lg">
        <h1 className="text--center">Ansible Ebooks</h1>
        <EbookGrid ebooks={ansibleEbooks} />
      </div>
    </Layout>
  );
};

export default AnsibleEbooksPage;