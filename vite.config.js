import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import {resolve} from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'MEDisplay',
            fileName: (format) => `MEDisplay.${format}.js`
        }
    },
    rollupOptions: {
        external: ['vue'],
        output: {
            globals: {
                vue: 'Vue'
            }
        }
    },
    plugins: [
        vue2()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
