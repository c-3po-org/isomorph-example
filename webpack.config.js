const webpack = require('webpack');

module.exports = ({ locale }={locale: 'en'}) => {
    const c3po = {};

    if (locale !== 'en') {
        c3po.resolve = { translations: `./i18n/${locale}.po` };
    }

    return {
        entry: { app: './client/index.js' },
        output: { path: 'dist',  filename: `${locale}/app.js` },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: { loader: 'babel-loader', options: { plugins: [['c-3po', c3po]] } }
                }
            ]
        },
    }
};
