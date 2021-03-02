// rollup.config.js
import fs from 'fs';
import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import babel from 'rollup-plugin-babel';
import minimist from 'minimist';
import sass from 'rollup-plugin-sass';
import componentsInput from '../src/components-input';
import clean from 'rollup-plugin-clean';

// Get browserslist config and remove ie from es build targets
const esbrowserslist = fs.readFileSync('./.browserslistrc')
  .toString()
  .split('\n')
  .filter((entry) => entry && entry.substring(0, 2) !== 'ie');

const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, '..');

const baseConfig = {
  input: componentsInput,
  plugins: {
    preVue: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      alias({
        resolve: ['.js', '.ts', '.vue'],
        entries: {
          '@': path.resolve(projectRoot, 'src'),
        },
      }),
    ],
    vue: {
      css: true,
      template: {
        isProduction: true,
      }
    },
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts', '.vue'],
    },
  },
};

const baseConfigSSR = {
  input: componentsInput,
  plugins: {
    preVue: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      alias({
        resolve: ['.js', '.ts', '.vue'],
        entries: {
          '@': path.resolve(projectRoot, 'src'),
        },
      }),
    ],
    vue: {
      css: true,
      template: {
        isProduction: true,
        optimizeSSR: true
      }
    },
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts', '.vue'],
    },
  },
};

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
  'autosize',
  'vue',
  'lodash-es',
  'lodash-es/uniqueId',
  'lodash-es/reduce',
  'lodash-es/isEqual',
  'lodash-es/throttle',
  'clipboard',
  'human-format',
  'lodash-es/debounce',
  'lodash-es/isArray',
  'lodash-es/cloneDeep',
  'lodash-es/throttle',
  '@mdi/js'
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  'vue': 'vue',
  'lodash-es': 'lodash-es',
  'lodash-es/uniqueId': 'uniqueId',
  'lodash-es/isEqual': 'isEqual',
  'lodash-es/cloneDeep': 'cloneDeep',
  'lodash-es/reduce': 'reduce',
  'clipboard': 'clipboard',
  'lodash-es/debounce': 'debounce',
  'lodash-es/isArray': 'isArray',
  'lodash-es/throttle': 'throttle',
  'human-format': 'human-format',
  '$t': '$t'
};

// Customize configs for individual targets
const buildFormats = [];
if (!argv.format || argv.format === 'es') {
  const esConfig = {
    ...baseConfig,
    external,
    output: {
      dir: 'dist/esm',
      format: 'esm'
    },
    plugins: [
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      babel({
        ...baseConfig.plugins.babel,
        presets: [
          [
            '@babel/preset-env',
            {
              targets: esbrowserslist,
            },
          ],
        ],
      }),
      commonjs(),
      sass({
        output: false
      }),
      clean()
    ],
  };
  buildFormats.push(esConfig);
}

if (!argv.format || argv.format === 'cjs') {
  const esConfig = {
    ...baseConfigSSR,
    external,
    output: {
      dir: 'dist/ssr/',
      format: 'cjs',
    },
    plugins: [
      ...baseConfigSSR.plugins.preVue,
      vue(baseConfigSSR.plugins.vue),
      babel({
        ...baseConfigSSR.plugins.babel,
        presets: [
          [
            '@babel/preset-env',
            {
              targets: esbrowserslist,
            },
          ],
        ],
      }),
      commonjs(),
      sass({
        output: false
      }),
      clean()
    ],
  };
  buildFormats.push(esConfig);
}

// Export config
export default buildFormats;
