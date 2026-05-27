import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const dist = path.join(root, 'dist');
const vercel = path.join(root, '.vercel', 'output');

if (fs.existsSync(dist)) {
  fs.rmSync(vercel, { recursive: true, force: true });
  fs.mkdirSync(path.join(vercel, 'functions', '__server.func'), { recursive: true });
  fs.mkdirSync(path.join(vercel, 'static'), { recursive: true });

  fs.cpSync(path.join(dist, 'config.json'), path.join(vercel, 'config.json'));
  fs.cpSync(path.join(dist, 'client'), path.join(vercel, 'static'), { recursive: true });
  fs.cpSync(path.join(dist, 'server'), path.join(vercel, 'functions', '__server.func'), { recursive: true });
  
  console.log('✅ Successfully packaged build for Vercel (.vercel/output)');
} else {
  console.error('❌ dist folder not found. Build failed?');
  process.exit(1);
}
