import * as React from "react";
import ReactMarkdown from "react-markdown";

interface IMarkdownProps {
  source: string;
}

const Markdown: React.FC<IMarkdownProps> = (props) => {
  return (
    <div>
      <ReactMarkdown
        source={props.source}
      />
    </div>
  );
}

export default Markdown;