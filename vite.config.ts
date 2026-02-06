import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    exclude: ['hugeicons-react', '@hugeicons/react', '@hugeicons/core-free-icons'],
  },
  ssr: {
    noExternal: ['hugeicons-react', '@hugeicons/react', '@hugeicons/core-free-icons'],
  },
})
