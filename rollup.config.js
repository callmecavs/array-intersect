import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

const info = require('./package.json')

const config = {
  input: 'src/array-intersect.js',
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      presets: [
        [
          '@babel/preset-env', {
            modules: false,
            targets: {
              browsers: ['last 2 versions']
            }
          }
        ]
      ],
      plugins: [
        "@babel/plugin-proposal-object-rest-spread"
      ]
    })
  ],
  output: [
    {
      file: info.main,
      format: 'umd',
      name: 'ArrayIntersect'
    }, {
      file: info.module,
      format: 'es'
    }
  ]
}

export default config
