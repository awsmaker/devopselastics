import React from 'react';
import Layout from '@theme/Layout';
import VideoGrid from '../../components/VideoPageFeatures/VideoGrid';
import { Video } from '../../types/Video';

const terraformVideos: Video[] = [
  {
    id: '1',
    title: 'Introduction to Terraform',
    description: 'Learn the basics of Terraform.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  // Add 8 more videos with the same thumbnailUrl
  {
    id: '2',
    title: 'Terraform Modules',
    description: 'Understand Terraform modules and how to use them.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '3',
    title: 'Deploying Infrastructure with Terraform',
    description: 'Learn how to deploy infrastructure with Terraform.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '4',
    title: 'Terraform State Management',
    description: 'Introduction to state management in Terraform.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '5',
    title: 'Terraform Security',
    description: 'Learn about security in Terraform.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$49.99',
  },
  {
    id: '6',
    title: 'Terraform Best Practices',
    description: 'Learn the best practices in Terraform.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
  {
    id: '7',
    title: 'Advanced Terraform',
    description: 'Deep dive into advanced Terraform topics.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$29.99',
  },
  {
    id: '8',
    title: 'Terraform Performance Tuning',
    description: 'Learn how to tune Terraform performance.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$34.99',
  },
  {
    id: '9',
    title: 'Terraform for CI/CD',
    description: 'Learn how to use Terraform in CI/CD pipelines.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500',
    purchaseUrl: 'https://gumroad.com/',
    price: '$39.99',
  },
];

const TerraformVideosPage: React.FC = () => {
  return (
    <Layout title="Terraform Videos" description="Browse our collection of Terraform videos">
      <div className="container margin-vert--lg">
        <h1 className="text--center">Terraform Videos</h1>
        <VideoGrid videos={terraformVideos} />
      </div>
    </Layout>
  );
};

export default TerraformVideosPage;