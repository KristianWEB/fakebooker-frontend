const path = require('path');
const fs = require('fs');
const MultiEntryPlugin = require('webpack/lib/MultiEntryPlugin');

// const mockServerPath = path.resolve(__dirname, '..', 'mock-server.js');

// const widgetEntries = [
//   fs.existsSync(mockServerPath) && mockServerPath,
// ].filter(Boolean);

module.exports = async ({ config }) => {

  config.module.rules.push(
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: 'svgo-loader',
          options: {
            removeUnknownsAndDefaults: true,
            removeUnusedNS: true,
            collapseGroups: true,
            removeTitle: true,
            removeDesc: true,
            removeUselessDefs: true,
            removeXMLNS: true,
            removeEditorsNSData: true,
            removeEmptyAttrs: true,
          },
        },
      ],
    },
  );

  // Return the altered config
  return config;
};
