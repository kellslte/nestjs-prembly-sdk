const fs = require('fs');
const path = require('path');

const sourcePath = '/tmp/prembly-endpoints.json';
const targetPath = path.join(__dirname, 'catalog-source.json');

if (!fs.existsSync(sourcePath)) {
  console.log(`source file not found at ${sourcePath}; leaving ${targetPath} unchanged`);
  process.exit(0);
}

const raw = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
const cleaned = raw.map((item) => {
  const match = item.api.match(/"paths":\{"([^"]+)"/);
  return {
    slug: item.slug,
    title: item.title,
    method: item.method || 'post',
    path: match ? match[1] : '',
  };
});

fs.writeFileSync(targetPath, JSON.stringify(cleaned, null, 2));
console.log(`wrote ${cleaned.length} entries to ${targetPath}`);
