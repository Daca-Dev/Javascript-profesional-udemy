import { defineConfig, loadEnv } from 'vite'


export default defineConfig(({command, mode}) => {
  console.log(`🚀 ~ defineConfig ~ mode`, mode);
  console.log(`🚀 ~ defineConfig ~ command`, command);

  const port = 8080;

  const env = loadEnv(mode, process.cwd())
  console.log(`🚀 ~ defineConfig ~ env`, env);

  return {
    server: {
      port,
    }
  }
})