import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
// import analyze from 'rollup-plugin-analyzer';
import { visualizer } from 'rollup-plugin-visualizer';
// import { VitePWA } from 'vite-plugin-pwa';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [
    EnvironmentPlugin('all', { prefix: 'NEXT_PUBLIC_' }),
    react({ jsxImportSource: '@emotion/react', jsxRuntime: 'automatic' }),
    tsconfigPaths(),
    // analyze({ summaryOnly: true }),
    visualizer(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   devOptions: {
    //     enabled: false,
    //   },
    // }),
  ],
  resolve: {
    alias: {
      process: 'process/browser',
      url: 'process/browser',
    },
  },
  esbuild: {
    // sourcemap: true,
    // jsxImportSource: '@emotion/react',
    // jsxInject: `import React from 'react'`
  },
  build: {
    outDir: 'build',
    // sourcemap: true,
    minify: true,
  },
  server: {
    port: 3000,
  },
  // server: {
  //   proxy: {
  //     '^/images/*': {
  //       target: 'https://s3.eu-west-1.amazonaws.com/quesmed/',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/images/, ''),
  //     },
  //   },
  // },
});
