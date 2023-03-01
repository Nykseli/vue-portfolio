module.exports = {
  stylesheet: ['pdf/github.css'],
  css: `
  .page-break { page-break-after: always; }
  .markdown-body { font-size: 11px; }
  .markdown-body pre > code { white-space: pre-wrap; }
`,
  body_class: 'markdown-body',
  stylesheet_encoding: 'utf-8',
  pdf_options: {
		format: 'A4',
		margin: {top: '10mm', botton: '10mm', left: '20mm', right: '20mm'}
  }
};
