import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export default defineConfig({
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        lib: {
            entry: {
                index: 'cmd/index.ts',
                server: 'cmd/server.ts',
                ws: 'cmd/ws.ts',
                db: 'examples/db_example.ts',
                room: 'examples/room_example.ts'
            },
            fileName: (format, entryName) => `${entryName}.js`,
            formats: ['es'], // Важно: ES Modules
        },
        rollupOptions: {
            external: ['node:fs', 'node:path', 'node:http'],
        },
    },
});