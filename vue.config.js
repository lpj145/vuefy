const path = require('path')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config.resolve.alias
      .set('src', path.resolve(__dirname, 'src/'))
  }
}