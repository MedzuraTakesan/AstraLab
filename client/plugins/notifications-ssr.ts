import Vue from 'vue'
import Notifications from 'vue-notification/dist/ssr.js'
import type { NotificationOptions } from 'vue-notification'

declare module '@nuxt/types' {
  interface Context {
    $notify: (options: NotificationOptions | string) => void;
  }
  interface NuxtAppOptions {
    notify: (options: NotificationOptions | string) => void;
  }
}

Vue.use(Notifications)
