import { defineConfig } from 'vite'


export default defineConfig(() => {
  const port = 8080;

  return {
    server: {
      port,
    }
  }
})