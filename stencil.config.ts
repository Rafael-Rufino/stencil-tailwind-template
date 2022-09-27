import { Config } from '@stencil/core';
//Add these imports
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

import cssnano from 'cssnano';
import purgecss from '@fullhuman/postcss-purgecss';
import replace from 'postcss-replace';

//purge function to keep only the classes used in EACH component
const purge = purgecss({
  content: ['./src/**/*.tsx', './src/index.html'],
  safelist: [':host'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});
export const config: Config = {
  namespace: 'stencil-tailwind-template',
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    postcss({
      plugins: [
        tailwindcss('./tailwind.config.js'),
        autoprefixer(),
        replace({ pattern: 'html', data: { replaceAll: ':host' } }),
        ...(process.argv.includes('--purge') ? [purge, cssnano()] : []),
      ],
    }),
  ],
};
