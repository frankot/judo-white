
export interface Article {
    id: string;
    title: string;
    slug: string;
    date: string;
    shortDesc: string;
    fullContent: {
      html: string;
    };
    image: {
      url: string;
    };
  }
  