"use client";

import { useEffect, useState } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface MathDisplayProps {
  math: string;
  block?: boolean;
}

const MathDisplay = ({ math, block = false }: MathDisplayProps) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    try {
      const rendered = katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
      });
      setHtml(rendered);
    } catch (error) {
      console.error("Error rendering math:", error);
      setHtml(`Error rendering: ${math}`);
    }
  }, [math, block]);

  if (block) {
    return (
      <div className="my-4 overflow-x-auto py-2" dangerouslySetInnerHTML={{ __html: html }} />
    );
  }

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MathDisplay;