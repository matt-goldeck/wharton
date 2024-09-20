import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // allows raw HTML in markdown
import remarkGfm from "remark-gfm"; // provides GitHub Flavored Markdown

export interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl prose-indigo font-vt323">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[[rehypeRaw]]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
