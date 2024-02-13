## TIE International PWA NextJS

Dev Setup
```bash
## node 18 - 21
npm i
npm run dev
```

Service worker watcher
```bash
npx tsc ./public/sw.ts --lib "WebWorker" --outDir public --watch
```

Build
```bash
npm run build
npm run start
```