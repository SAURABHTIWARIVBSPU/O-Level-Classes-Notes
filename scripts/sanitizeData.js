import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirs = [
  path.join(__dirname, 'textbookData'),
  path.join(__dirname, 'oLevelTextbookData')
];

dirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(file => {
      if (file.endsWith('.js')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        content = content
          .replace(/[➔➜➝➞→]/g, '->')
          .replace(/[⇄⇆↔]/g, '<->')
          .replace(/[•●◦▪]/g, '-')
          .replace(/[▲▴]/g, '^')
          .replace(/[▼▾]/g, 'v')
          .replace(/[""]/g, '"')
          .replace(/['']/g, "'")
          .replace(/[–—]/g, '-')
          .replace(/…/g, '...');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Sanitized: ' + path.basename(dir) + '/' + file);
      }
    });
  }
});
