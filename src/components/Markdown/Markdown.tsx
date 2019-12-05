import * as React from "react";
import ReactMarkdown from "react-markdown";
import MathJax from "react-mathjax";
import RemarkMathPlugin from "remark-math";

interface IMarkdownProps {
  source: string;
  math?: boolean;
}

const markdownRenders = {};

const Markdown: React.FC<IMarkdownProps> = (props) => {
  const { source, math = false } = props;
  const markdownProps = (math) ? {
    source: source,
    plugins: [ RemarkMathPlugin ],
    renderers: {
      ...markdownRenders,
      math: (props: { value: string; }) => (<MathJax.Node formula={props.value} />),
      inlineMath: (props: { value: string; }) => (<MathJax.Node inline formula={props.value} />)
    },
  } : { source: source, renderers: {...markdownRenders} };
  return (
    <div>
      {(math) ? <MathJax.Provider input="tex">
        <ReactMarkdown {...markdownProps} />
      </MathJax.Provider>
      : <ReactMarkdown
        {...markdownProps}
      />}
    </div>
  );
}

export default Markdown;