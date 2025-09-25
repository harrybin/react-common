import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import packageJson from './package.json' with { type: 'json' };

export default [
    {
        //external: [...Object.keys(packageJson.peerDependencies || {})],
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
        plugins: [
            typescript({ 
                tsconfig: './tsconfig.json',
                declaration: false,
                outDir: 'dist'
            }), 
            resolve(), 
            commonjs(), 
            peerDepsExternal()
        ],
        watch: {
            exclude: ['node_modules/**', 'test/**'],
        },
    },
    {
        external: ['react-dom', 'react'],
        input: 'dist/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        watch: {
            exclude: ['node_modules/**', 'test/**'],
        },
    },
];
