import {defineConfig, PluginOption} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), keepScreen1()],
})

function keepScreen1(): PluginOption {
  return {
    name: 'vite-plugin-keep-screen1',
    config() {
      return {clearScreen: false}
    },
  }
}

function keepScreen2(): PluginOption {
  return {
    name: 'vite-plugin-keep-screen2',
    config(config) {
      config.clearScreen = false
    },
  }
}
