import { useEffect, useState } from "react";

// Lightweight Markdown renderer for bot messages
const markdownComponents: any = {
  a: ({ node, ...props }: any) => (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-1 underline-offset-2 hover:opacity-90"
    />
  ),
  code: ({ inline, className: codeClassName, children, ...props }: any) => {
    const isInline = inline ?? !/\blanguage-/.test(codeClassName || "");
    if (isInline) {
      return (
        <code className="text-[0.95em]" {...props}>
          {children}
        </code>
      );
    }
    return (
      <pre className="mt-2 mb-2 overflow-auto rounded-lg bg-gray-900 text-gray-100 p-3 text-sm">
        <code className={codeClassName} {...props}>
          {children}
        </code>
      </pre>
    );
  },
};

export const MarkdownRenderer = ({ text }: { text: string }) => {
  const [MarkdownMod, setMarkdownMod] = useState<any>(null);
  const [gfm, setGfm] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    // Dynamically import heavy markdown libs to split them into a separate chunk
    Promise.all([
      import("react-markdown"),
      import("remark-gfm"),
    ]).then(([md, gfmMod]) => {
      if (!mounted) return;
      setMarkdownMod(() => md.default || md);
      setGfm(() => gfmMod.default || gfmMod);
    });
    return () => {
      mounted = false;
    };
  }, []);

  // Fallback: render plain text while markdown libs are loading
  if (!MarkdownMod || !gfm) {
    return (
      <p className="text-base sm:text-[17px] leading-relaxed whitespace-pre-wrap break-words">
        {text}
      </p>
    );
  }

  const ReactMarkdown = MarkdownMod;
  const remarkGfm = gfm;

  return (
    <div className="markdown text-base sm:text-[17px] leading-relaxed break-words [&>p]:mb-2 [&>ul]:list-disc [&>ol]:list-decimal [&>ul]:pl-5 [&>ol]:pl-5 [&>h1]:text-xl [&>h2]:text-lg [&>h3]:text-base [&>h1,h2,h3]:font-semibold [&>h1,h2,h3]:mt-2 [&>h1,h2,h3]:mb-1 [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:bg-black/10 dark:[&_code]:bg-white/10">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {text}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
