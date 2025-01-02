import { gql } from "graphql-request";

export const GET_4_ARTICLES = gql`
  query GetArticles {
    articles(first: 4, orderBy: date_DESC) {
      id
      title
      slug
      date
      shortDesc
      image {
        url
      }
    }
  }
`;

export const GET_ALL_SLUGS = gql`
  query GetAllSlugs {
    articles(first: 100, orderBy: date_DESC) {
      slug
    }
  }
`;

export const GET_ARTICLE = gql`
  query GetArticle($slug: String!) {
    article(where: { slug: $slug }) {
      id
      title
      date
      shortDesc
      fullContent {
        html
      }
      image {
        url
      }
    }
  }
`;

export const GET_ALL_ARTICLES = gql`
  query GetAllArticles {
    articles(orderBy: date_DESC) {
      id
      title
      slug
      date
      shortDesc
      image {
        url
      }
    }
  }
`;
