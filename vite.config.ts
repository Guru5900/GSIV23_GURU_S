/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugIn: Partial<VitePWAOptions> = {
  registerType:'prompt',
  includeAssets:['favicon.ico'],
  manifest:{
    name:"Movies",
    short_name:"Movies",
    description:"I am a simple vite app",
    icons:[{
      src: '/assets/react.svg',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src:'/assets/react.svg',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '/assets/react.svg',
      sizes:'180x180',
      type:'image/png',
      purpose:'favicon',
    },
    {
      src: '/assets/react.svg',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon',
    }
  ],
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
  server:{
    port:3000
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles:'src/test/setup.ts'
  }
})
