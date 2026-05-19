const fs = require('fs');
const path = require('path');

function main() {
  const clientDir = path.resolve(__dirname, '..', 'dist', 'client');
  const assetsDir = path.join(clientDir, 'assets');

  if (!fs.existsSync(clientDir) || !fs.existsSync(assetsDir)) {
    console.error('Error: expected build output at dist/client/assets. Run `npm run build` first.');
    process.exit(1);
  }

  const files = fs.readdirSync(assetsDir);
  const jsFile = files.find((f) => /^index-.*\.js$/.test(f)) || files.find((f) => f.endsWith('.js'));
  const cssFile = files.find((f) => f.startsWith('styles-') && f.endsWith('.css')) || files.find((f) => f.endsWith('.css'));

  if (!jsFile) {
    console.error('Error: could not find a client JS bundle in dist/client/assets');
    process.exit(1);
  }

  const html = `<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1" />\n  <title>Sakthi Renganathan K — Portfolio</title>\n  ${cssFile ? `<link rel="stylesheet" href="./assets/${cssFile}">` : ''}\n</head>\n<body>\n  <div id="root"></div>\n  <script type="module" src="./assets/${jsFile}"></script>\n</body>\n</html>`;

  const outPath = path.join(clientDir, 'index.html');
  fs.writeFileSync(outPath, html, 'utf8');
  console.log('Wrote', outPath);
}

try {
  main();
} catch (err) {
  console.error(err);
  process.exit(1);
}
