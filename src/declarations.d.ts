// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module "package-without-declarations"

// And to shim assets, use (one file extension per `declare`):
// declare module "*.png"

interface FrontMatterProps {
  date: string;
  tags: string[];
  title: string;
}

interface SlugFieldProps {
  slug: string;
}

interface NodeProps {
  excerpt: string;
  fields: SlugFieldProps;
  frontmatter: FrontMatterProps;
}

interface EdgeProps {
  node: NodeProps;  
}

interface IIndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: EdgeProps[];
    }
  }  
}

interface IArchivesPageProps {
  data: {
    allMarkdownRemark: {
      edges: EdgeProps[];
    }
  }
  location: {
    search: string;
  }
}