import { defineConfig } from 'vitest/config'

import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      context: path.resolve(__dirname, 'src/context'),
    },
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})