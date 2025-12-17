// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    minify: 'esbuild', // Plus rapide et évite les conflits de noms
    sourcemap: false,
    
    lib: {
      entry: 'main.js',
      formats: ['es'],
      fileName: 'main'
    },
    
    rollupOptions: {
      output: {
        // Garder les modules séparés pour cache granulaire
        manualChunks: (id) => {
          if (id.includes('modules/')) {
            const match = id.match(/modules\/([^.]+)\.js/)
            return match ? match[1] : null
          }
        },
        
        // Nommage des chunks
        chunkFileNames: '[name].js',
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  },
  
  // Config serveur dev
  server: {
    port: 3000,
    open: false,
    cors: true
  }
})