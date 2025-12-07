import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    port:5161,
    allowedHosts:["ci-cd55.alakbarova.site"]
  },
  preview:{
    port:5161,
    host:true
  },
  plugins: [react()],
})
