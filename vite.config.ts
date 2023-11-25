import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@app', replacement: path.resolve(__dirname, 'src/app') },
      { find: '@ui', replacement: path.resolve(__dirname, 'src/components/ui') },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/shared/styles') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/shared/lib/utils') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/shared/lib/hooks') },
      { find: '@assets', replacement: path.resolve(__dirname, 'public/assets') },
      { find: '@screens', replacement:  path.resolve(__dirname, 'src/screens')},
      { find: '@components', replacement:  path.resolve(__dirname, 'src/components')},
      { find: '@configs', replacement: path.resolve(__dirname, 'src/shared/lib/configs') },
    ]
  }
});
