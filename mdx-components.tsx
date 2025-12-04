import React from "react";
import { stripWhitespace } from "./lib/utils";
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: (props) => <h1 className="text-4xl font-semibold mt-12 mb-6 tracking-tight" {...props} />,
  h2: (props) => <h2 className="text-3xl font-semibold mt-10 mb-4 tracking-tight" {...props} />,
  h3: (props) => <h3 className="text-2xl font-semibold mt-8 mb-3" {...props} />,
  h4: (props) => <h4 className="text-xl font-medium mt-6 mb-2" {...props} />,

  p: (props) => <p className="leading-relaxed text-[1.05rem] my-4" {...props} />,

  ul: (props) => <ul className="list-disc pl-6 space-y-2 my-4 leading-relaxed" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 space-y-2 my-4 leading-relaxed" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,

  strong: (props) => <strong className="font-semibold" {...props} />,
  em: (props) => <em className="italic" {...props} />,

  a: ({ href, children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    // Check if children is a React element with href
    if (React.isValidElement(children)) {
      const childProps = children.props as { href?: string };
      if (children.type === "a" || childProps.href) {
        return children;
      }
    }

    return (
      <a
        href={href}
        {...rest}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-blue-600 hover:text-blue-700 underline underline-offset-2 dark:text-blue-400 dark:hover:text-blue-300"
      >
        {children}
      </a>
    );
  },

  code: ({ children, className, ...props }: { children: React.ReactNode; className?: string }) => {
    const isBlock = typeof children === "string" && children.includes("\n");

    if (isBlock) {
      // For block code, let <pre> handle the wrapper
      return (
        <code className="not-prose" {...props}>
          {children}
        </code>
      );
    }

    // Inline code
    return (
      <code
        className={`
        not-prose bg-zinc-200 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100
        px-1.5 py-0.5 rounded text-sm
        ${className || ""}
      `}
        {...props}
      >
        {children}
      </code>
    );
  },

  pre: ({ children, className, ...props }: { children: React.ReactNode; className?: string }) => (
    <pre
      className={`
      not-prose bg-zinc-200 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100
      px-4 py-2 rounded text-sm overflow-x-auto my-4
      ${className || ""}
    `}
      {...props}
    >
      {children}
    </pre>
  ),

  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-zinc-300 dark:border-zinc-600 pl-4 italic text-zinc-700 dark:text-zinc-300 my-6"
      {...props}
    />
  ),

  table: (props) => (
    <table {...props} className="w-full border-collapse text-sm my-6">
      {stripWhitespace(props.children)}
    </table>
  ),
  thead: (props) => (
    <thead {...props} className="bg-zinc-100 dark:bg-zinc-800">
      {stripWhitespace(props.children)}
    </thead>
  ),
  tbody: (props) => <tbody {...props}>{stripWhitespace(props.children)}</tbody>,
  tr: (props) => <tr {...props}>{stripWhitespace(props.children)}</tr>,
  th: (props) => (
    <th {...props} className="border px-3 py-2 font-semibold">
      {props.children}
    </th>
  ),
  td: (props) => (
    <td {...props} className="border px-3 py-2">
      {props.children}
    </td>
  ),
};

function MDXWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        "mx-auto max-w-4xl px-6 py-12 prose prose-zinc dark:prose-invert " +
        "prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl " +
        "prose-headings:font-semibold prose-p:leading-relaxed prose-li:leading-relaxed "
      }
    >
      {children}
    </div>
  );
}

export function useMDXComponents(): MDXComponents {
  return {
    wrapper: ({ children }: { children: React.ReactNode }) => <MDXWrapper>{children}</MDXWrapper>,
    ...components,
  };
}
