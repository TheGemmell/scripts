import { exec } from 'node:child_process';
import fs from 'node:fs/promises';
import viteScripts from './lib';

async function readPackageJson() {
  const file = await fs.readFile('./package.json', 'utf-8');
  return JSON.parse(file);
}

async function start() {
  const pkg = await readPackageJson();
  pkg.scripts = viteScripts;
  exec('npm install --save-dev vite @vitejs/plugin-react', (err, stdout, stderr) => {
  if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    console.log(stderr);
  });
  exec('npm install --save react@latest react-dom@latest', (err, stdout, stderr) => {
  if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    console.log(stderr);
  });
  // await fs.writeFile('./cra/package.json', JSON.stringify(pkg, null, 2));

}

start();
