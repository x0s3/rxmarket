/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

module.exports = {
  watchFolders: [
    // To allow finding files outside mobile
    path.resolve(__dirname, '../..')
  ],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true
      }
    })
  }
};
