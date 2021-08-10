<template>
  <v-app >
    <Nuxt class="defaultLayer" />
  </v-app>
</template>

<script>
import {Component, Vue} from "nuxt-property-decorator";

@Component
export default class Index extends Vue{

}
</script>

<style lang="scss">
  .defaultLayer {
    padding-top: 50px;
  }
</style>
