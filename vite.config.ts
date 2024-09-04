import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'
import { undestructurePlugin } from 'babel-plugin-solid-undestructure'
import solidSvg from 'vite-plugin-solid-svg'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    ...undestructurePlugin('ts'),
    solidSvg({
      svgo: {
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false
                },
              },
            },
          ],
        }
      }
    }),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
