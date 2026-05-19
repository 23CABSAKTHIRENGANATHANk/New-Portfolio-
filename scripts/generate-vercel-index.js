const fs = require('fs');
const path = require('path');

async function main() {
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

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Sakthi Renganathan K — Portfolio</title>
  ${cssFile ? `<link rel="stylesheet" href="./assets/${cssFile}">` : ''}
</head>
<body>
  <div id="root"></div>
  <script type="module" src="./assets/${jsFile}"></script>
</body>
</html>`;

  const outPath = path.join(clientDir, 'index.html');
  fs.writeFileSync(outPath, html, 'utf8');
  console.log('Wrote', outPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
