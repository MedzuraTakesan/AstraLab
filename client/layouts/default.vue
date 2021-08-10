<template>
  <v-app>
    <Nuxt class="defaultLayer" />
    <notification-errors/>
  </v-app>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import NotificationErrors from '~/components/base/notifications/NotificationErrors'
@Component({
  components: { NotificationErrors }
})
export default class Index extends Vue {

}
</script>

<style lang="scss">
  .defaultLayer {
    padding-top: 50px;
  }
</style>
