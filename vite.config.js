import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/movieapi', // IMPORTANTE: il nome del tuo repo GitHub!
  plugins: [react()],
})
