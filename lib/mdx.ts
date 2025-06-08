import katex from 'katex';

export function mdxToHtml(source: string): string {
  // remove frontmatter if present
  const frontMatter = /^---\n[\s\S]*?\n---\n/;
  source = source.replace(frontMatter, '');

  // escape HTML characters
  let html = source.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // math blocks $$...$$
  html = html.replace(/\$\$([\s\S]+?)\$\$/g, (_, m) =>
    katex.renderToString(m.trim(), { displayMode: true, throwOnError: false })
  );
  // inline math $...$
  html = html.replace(/\$([^$]+)\$/g, (_, m) =>
    katex.renderToString(m.trim(), { displayMode: false, throwOnError: false })
  );

  // headings
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

  // bold text
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // unordered lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');

  // paragraphs
  html = html.replace(/^(?!<h\d|<ul|<li|<\/li|<\/ul|\s*$)(.+)$/gm, '<p>$1</p>');

  return html;
}
