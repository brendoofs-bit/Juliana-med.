const fs = require('fs');
const files = [
  'index.html',
  'hakon/index.html',
  'hegon/index.html',
  'pisom/index.html',
  'ultramed-pro/index.html',
  'omer-smart-3d/index.html',
  'velaryan-medical-san/index.html'
];

const headScript = `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MN6J49PP');</script>
<!-- End Google Tag Manager -->`;

const bodyScript = `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MN6J49PP"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Remove existing GTM in Head
  content = content.replace(/<!-- Google Tag Manager -->[\s\S]*?<!-- End Google Tag Manager -->/g, '');
  // Remove existing GTM noscript in Body
  content = content.replace(/<!-- Google Tag Manager \(noscript\) -->[\s\S]*?<!-- End Google Tag Manager \(noscript\) -->/g, '');

  // Inject in head
  content = content.replace('<head>', '<head>\\n' + headScript);

  // Inject in body
  content = content.replace('<body>', '<body>\\n' + bodyScript);

  fs.writeFileSync(file, content);
}
console.log('GTM updated in all files.');
