import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const redirectPlugin = {
  name: 'redirect-trailing-slash',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (
        req.url === '/pasindu-vihangana.github.io' ||
        req.url.startsWith('/pasindu-vihangana.github.io?')
      ) {
        res.writeHead(301, { Location: '/pasindu-vihangana.github.io/' });
        res.end();
        return;
      }
      next();
    });
  },
};

export default defineConfig({
  build: {
    outDir: "docs", // 👈 GitHub Pages requires /docs or / (root)
  },
  plugins: [react(), redirectPlugin],
  base: '/pasindu-vihangana.github.io/',
  server: {
    port: 5173,
    open: true,
  },
})
