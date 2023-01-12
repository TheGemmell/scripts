import { exec } from 'node:child_process';
import fs from 'node:fs/promises';
import { kill } from 'node:process';
import viteScripts from './lib';

async function readPackageJson() {
  const file = await fs.readFile('./cra/package.json', 'utf-8');
  return JSON.parse(file);
}

async function start() {
  const pkg = await readPackageJson();
  pkg.scripts = viteScripts;
  exec('npm install --save-dev vite', (err, stdout, stderr) => {
  if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    console.log(stderr);
  });
  exec('npm install --save-dev @vitejs/plugin-react', (err, stdout, stderr) => {
  if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    console.log(stderr);
  })
  // await fs.writeFile('./cra/package.json', JSON.stringify(pkg, null, 2));

}

start();
