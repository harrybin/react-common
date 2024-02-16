import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

import packageJson from './package.json' assert { type: 'json' };

export default [
    {
        inlineDynamicImports: true,
        external: [...Object.keys(packageJson.peerDependencies || {})],
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [typescript({ tsconfig: './tsconfig.json' }), packageJson, resolve(), commonjs()],
        watch: {
            exclude: ['node_modules/**', 'test/**'],
        },
    },
    {
        external: ['react-dom', 'react'],
        input: 'dist/esm/types/src/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        watch: {
            exclude: ['node_modules/**', 'test/**'],
        },
    },
];
