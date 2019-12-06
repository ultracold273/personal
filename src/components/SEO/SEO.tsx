import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface ISEOProps {
  post: {
    title?: string;
    description?: string;
    path?: string;
    // image: string;
  }
}

const SEO: React.FC<ISEOProps> = ({ post }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          baseUrl
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  if (defaults.baseUrl === '' && typeof window !== 'undefined') {
    defaults.baseUrl = window.location.origin;
  }

  if (defaults.baseUrl === '') {
    console.error('Please set a baseUrl in your site metadata!');
    return null;
  }

  const title = post.title || defaults.title;
  const description = post.description || defaults.description;
  const url = new URL(post.path || '', defaults.baseUrl);
  // const image = post.image ? new URL(post.image, defaults.baseUrl) : false;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url.toString()} />
      <meta name="description" content={description} />
      {/* {image && <meta name="image" content={image} />} */}
      <meta property="og:url" content={url.toString()} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* {image && <meta property="og:image" content={image} />} */}
    </Helmet>
  );
};

export default SEO;