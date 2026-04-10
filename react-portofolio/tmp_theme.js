const fs = require('fs');
const path = require('path');

function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      if (filePath.endsWith('.css') || filePath.endsWith('.jsx')) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

const files = getFiles('./src');
const replacements = {
  '#8b5cf6': '#ff7e00',
  '#7c3aed': '#cc6600',
  '139, 92, 246': '255, 126, 0',
  '#b794f4': '#ffb066',
  '#a78bfa': '#ff9c40',
  '#ec4899': '#ffaa00',
  '#5227FF': '#ff4500',
  '#FF9FFC': '#ffaa00',
  '#B19EEF': '#ffd700'
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  for (const [key, value] of Object.entries(replacements)) {
    const regex = new RegExp(key, 'gi');
    if (regex.test(content)) {
      content = content.replace(regex, value);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
