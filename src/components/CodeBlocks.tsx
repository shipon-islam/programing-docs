"use client";
import hljs from "highlight.js";
// import "highlight.js/styles/atom-one-dark.css";
// import "highlight.js/styles/monokai.css";
// import "highlight.js/styles/night-owl.css";
// import "highlight.js/styles/obsidian.css";
import "@/app/dacula.css";

import { ReactNode, useEffect } from "react";
type Tcodeblock = {
  language: string;
  children: ReactNode;
  title?: string;
};
const CodeBlock = ({ language, children, title }: Tcodeblock) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div>
      <h3 className="text-sm pl-2 mt-6 capitalize py-1">{title}</h3>
      <div className="bg-slate-900 pt-2 pl-3 rounded-t-xl">
        <span className="bg-red-500 w-3 h-3 inline-block mx-1 rounded-full"></span>
        <span className="bg-orange-400 w-3 h-3 inline-block mx-1 rounded-full"></span>
        <span className="bg-green-400 w-3 h-3 inline-block mx-1 rounded-full"></span>
      </div>
      <pre>
        <code className={language}>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
