import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  ssr: {
		noExternal: ['three', 'troika-three-text']
	},
  build:
    {
        outDir: './dist',
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            output: {
              entryFileNames: `assets/[name].js`,
              chunkFileNames: `assets/[name].js`,
              assetFileNames: `assets/[name].[ext]`,
              format: 'iife'
            },
            external: [
              './app.css'
            ],
          }
    }
})
