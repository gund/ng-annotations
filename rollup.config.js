import nodeResolve from 'rollup-plugin-node-resolve';
import { GLOBAL, globalsRegex } from 'rollup-globals-regex';

export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ng-annotations.umd.js',
  format: 'umd',
  moduleName: 'annotations',
  plugins: [
    nodeResolve({ jsnext: true, browser: true })
  ],
  globals: globalsRegex({
    'tslib': 'tslib',
    [GLOBAL.NG2]: GLOBAL.NG2.TPL,
    [GLOBAL.RX]: GLOBAL.RX.TPL,
    [GLOBAL.RX_OBSERVABLE]: GLOBAL.RX_OBSERVABLE.TPL,
    [GLOBAL.RX_OPERATOR]: GLOBAL.RX_OPERATOR.TPL,
  }),
  external: (moduleId) => {
    if (/^(\@angular|rxjs)\//.test(moduleId)) {
      return true;
    }

    return false;
  }
};
