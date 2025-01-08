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
  mt?: string;
  threeDot?: boolean;
};
const CodeBlock = ({
  language,
  children,
  title,
  mt = "mt-6",
  threeDot = true,
}: Tcodeblock) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div>
      <h3 className={`text-sm pl-2  capitalize py-1 ${mt}`}>{title}</h3>
      {threeDot && (
        <div className="bg-slate-900 pt-2 pl-3 rounded-t-xl">
          <span className="bg-red-500 w-3 h-3 inline-block mx-1 rounded-full"></span>
          <span className="bg-orange-400 w-3 h-3 inline-block mx-1 rounded-full"></span>
          <span className="bg-green-400 w-3 h-3 inline-block mx-1 rounded-full"></span>
        </div>
      )}

      <pre>
        <code className={language}>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
