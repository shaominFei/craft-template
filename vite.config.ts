import react from '@vitejs/plugin-react';
import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig as defineVitestConfig } from 'vitest/config';

const viteConfig = defineViteConfig({
  plugins: [react(), tsconfigPaths()],
});

const vitestConfig = defineVitestConfig({
  test: {
    // support `describe`, `test` etc. globally,
    // so you don't need to import them every time
    globals: true,
    // run tests in jsdom environment
    environment: 'jsdom',
    // global test setup
    setupFiles: './src/tests/setup.ts',
    css: true,
  },
});

export default mergeConfig(viteConfig, vitestConfig);
