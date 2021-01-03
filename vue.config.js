const path = require('path')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, './src/styles/abstracts/*.styl')
      ]
    }
  }
}
