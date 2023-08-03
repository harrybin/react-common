import { defineConfig } from 'vitest/config';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
    test: {
        include: ['src/**/*.test.ts*'],
        exclude: [
            '**/node_modules/**',
            '**/dist/**',
            '**/cypress/**',
            '**/.{vscode,git,github,cache,output,temp,volumes,tye}/**',
            '**/{rollup,vite,vitest,build}.config.*',
        ],
        deps: {
            inline: [
                '@mui/icons-material',
                //in case using devexpress, you may need to add those packages here too
            ],
        },
        globals: true, // doesn't work properly, you still need to "import { vi } from 'vitest';" in each test file
        environment: 'jsdom',
        setupFiles: './test/setupTests.ts',
        reporters: ['verbose', 'junit', 'vitest-sonar-reporter'],
        outputFile: {
            junit: './coverage/junit.xml',
            'vitest-sonar-reporter': './coverage/sonar-report.xml',
        },
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html', 'json', 'lcov'],
        },
    },
    plugins: [
        AutoImport({
            imports: ['vitest'],
            dts: true, // generate TypeScript declaration
        }),
    ],
});
