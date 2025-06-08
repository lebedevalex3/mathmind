import React from "react";
import MathDisplay from "@/components/math/MathDisplay";

// Function to parse Markdown content and render KaTeX formulas
export function renderMathInContent(content: string): React.ReactNode[] {
  // Split the content by math delimiters
  const parts = content.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);

  return parts.map((part, index) => {
    // Check if this part is a math formula
    if (part.startsWith("$$") && part.endsWith("$$")) {
      // Block math ($$...$$)
      const math = part.slice(2, -2);
      return <MathDisplay key={index} math={math} block={true} />;
    } else if (part.startsWith("$") && part.endsWith("$")) {
      // Inline math ($...$)
      const math = part.slice(1, -1);
      return <MathDisplay key={index} math={math} block={false} />;
    } else {
      // Regular text content
      return <span key={index}>{part}</span>;
    }
  });
}