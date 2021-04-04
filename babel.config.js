module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@styles': './src/styles',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@redux': './src/redux',
          '@apis': './src/apis',
          '@exceptions': './src/exceptions',
          '@navigators': './src/navigators',
        },
      },
    ],
  ],
};
