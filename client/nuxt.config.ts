import type { NuxtConfig } from '@nuxt/types'
// @ts-ignore
import colors from 'vuetify/es5/util/colors'

const config: NuxtConfig = {
  build: {
    babel: {
      compact: true
    }
  },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
  ],
  env: {},
  head: {
    title: 'nuxt-community/typescript-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'AstraLab' }
    ],
    link: []
  },
  loading: { color: '#0c64c1' },
  modules: [
    '@nuxtjs/axios'
  ],
  css: [
    '~assets/classes.scss'
  ],
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    options: {
      customProperties: true
    },
    theme: {
      light: true,
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: '#181C43',
          info: '#1E1A3E',
          warning: colors.amber.base,
          error: '#FF6683',
          success: colors.green.accent3,
          background: '#FAF3F3'
        }
      }
    }
  },
  plugins: [],
  axios: {
    proxy: false // Can be also an object with default options
  },
  //
  proxy: {
  }
  // server: {
  //   port: 3003,
  //   host: '0.0.0.0'
  // }
}

export default config
