import React from 'react';
import Layout from '@theme/Layout';
import VideoGrid from '../../components/VideoPageFeatures/VideoGrid';
import { Video } from '../../types/Video';

const ansibleVideos: Video[] = [
  {
    id: '1',
    title: 'Introduction to Ansible',
    description: 'Learn the basics of Ansible.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  // Add 8 more videos with the same thumbnailUrl
  {
    id: '2',
    title: 'Ansible Playbooks',
    description: 'Understand Ansible playbooks and how to use them.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '3',
    title: 'Deploying Applications with Ansible',
    description: 'Learn how to deploy applications with Ansible.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '4',
    title: 'Ansible Security',
    description: 'Introduction to security in Ansible.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '5',
    title: 'Ansible Best Practices',
    description: 'Learn the best practices in Ansible.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$49.99',
  },
  {
    id: '6',
    title: 'Advanced Ansible',
    description: 'Deep dive into advanced Ansible topics.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '7',
    title: 'Ansible Performance Tuning',
    description: 'Learn how to tune Ansible performance.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '8',
    title: 'Ansible for CI/CD',
    description: 'Learn how to use Ansible in CI/CD pipelines.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '9',
    title: 'Ansible with Docker',
    description: 'Learn how to use Ansible with Docker.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
];

const AnsibleVideosPage: React.FC = () => {
  return (
    <Layout title="Ansible Videos" description="Browse our collection of Ansible videos">
      <div className="container margin-vert--lg">
        <h1 className="text--center">Ansible Videos</h1>
        <VideoGrid videos={ansibleVideos} />
      </div>
    </Layout>
  );
};

export default AnsibleVideosPage;