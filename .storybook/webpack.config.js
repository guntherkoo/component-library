// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config
const path = require('path');
const webpack = require('webpack');

const COMPONENTS_PATH = path.resolve(path.resolve(__dirname), '../components');

const getPath = scope => {
    return path.dirname(require.resolve(`${scope}/package.json`));
};

module.exports = async ({ config, mode }) => {

    config.module.rules.push({
        test: /\.(js|jsx)$/,
        loader: ['babel-loader', 'eslint-loader'],
        include: [COMPONENTS_PATH],
    });

    config.module.rules.push({
        test: /\.scss$/,
        loaders: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                },
            },
            'postcss-loader',
            'sass-loader',
        ],
    });

    config.module.rules.push({
        test: /\.scss$/,
        loaders: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ],
    });

    return config;
};
