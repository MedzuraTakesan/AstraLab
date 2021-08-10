<template>
  <v-btn :class="btnClass" :color="color" :block="block" large rounded depressed>
      <slot/>
  </v-btn>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class AstraButton extends Vue {
  @Prop({default: 'white'})!readonly color!: string
  @Prop({default: false})!readonly block!: boolean
  @Prop({default: undefined })!readonly fill: boolean | undefined

  get btnClass(): string {
    return this.fill !== undefined ? 'flex-fill' : ''
  }
}
</script>

<style lang="scss">

</style>
