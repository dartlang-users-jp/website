module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Dartlang Users JP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Dartlang Users JPは、Dartを愛する日本の開発者のためのコミュニティです。'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'http://fonts.googleapis.com/css?family=Montserrat'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
