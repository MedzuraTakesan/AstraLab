<template>
  <v-btn
    :class="btnClass"
    :color="color"
    :block="block"
    :disabled="disabled"
    large
    rounded
    depressed
    @click="click"
  >
    <slot />
  </v-btn>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit } from 'nuxt-property-decorator'

@Component
export default class AstraButton extends Vue {
  @Prop({ default: 'white' })!readonly color!: string
  @Prop({ default: false })!readonly block!: boolean
  @Prop({ default: false })!readonly disabled!: boolean
  @Prop({ default: undefined })!readonly fill: boolean | undefined

  get btnClass (): string {
    return this.fill !== undefined ? 'flex-fill' : ''
  }

  @Emit('click')
  click (): true {
    return true
  }
}
</script>

<style lang="scss">

</style>
