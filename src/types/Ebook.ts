export interface Ebook {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  purchaseUrl: string;
  price: string;
}

export interface Category {
  id: string;
  name: string;
  ebooks: Ebook[];
}