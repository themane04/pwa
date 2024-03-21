### PWA

This experience was a brief yet fascinating insight provided by an expert within my company, offering me a unique opportunity to delve into the world of Progressive Web Apps (PWA). Together, we explored the core functionalities of PWAs, examining how they differ from traditional web applications and the advantages they offer in terms of performance, reliability, and user engagement. Through a series of hands-on exercises, we not only learned about the technical aspects of PWAs, such as service workers, manifest files, and offline capabilities but also applied this knowledge in practice. This interactive session illuminated the practical applications of PWAs in today's mobile-first world, enhancing my understanding of modern web development practices and sparking my interest in further exploring this technology.

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
