/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

module.exports = {
  watchFolders: [
    // To allow finding files outside customer
    path.resolve(__dirname, '../core'),
    path.resolve(__dirname, '../../node_modules')
  ],
  transformer: {
    minifierPath: 'metro-minify-terser',
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true
      }
    })
  }
};
