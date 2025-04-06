import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export default defineConfig({
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        lib: {
            entry: 'cmd/index.ts',
            fileName: 'index',
            formats: ['es'], // Важно: ES Modules
        },
        rollupOptions: {
            external: ['node:fs', 'node:path', 'node:http'],
        },
    },
});