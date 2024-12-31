export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  purchaseUrl: string;
  price: string;
}

export interface Category {
  id: string;
  name: string;
  videos: Video[];
}