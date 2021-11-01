const path = require('path');
const tsTransformPaths = require('@zerollup/ts-transform-paths');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: (program) => {
            const transformer = tsTransformPaths(program);
            return {
              before: [transformer.before],
              afterDeclarations: [transformer.afterDeclarations]
            };
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      core: path.resolve(__dirname, 'src/core'),
      components: path.resolve(__dirname, 'src/components'),
      systems: path.resolve(__dirname, 'src/systems'),
      math: path.resolve(__dirname, 'src/math'),
    },
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: {
      name: 'ecs',
      type: 'umd'
    }
  }
};